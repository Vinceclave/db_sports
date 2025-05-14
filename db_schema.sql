-- Users Table
CREATE TABLE Users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    registration_date DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Venues Table
CREATE TABLE Venues (
    venue_id INT PRIMARY KEY AUTO_INCREMENT,
    venue_name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    capacity INT
);

-- Sports Table
CREATE TABLE Sports (
    sport_id INT PRIMARY KEY AUTO_INCREMENT,
    sport_name VARCHAR(255) UNIQUE NOT NULL
);

-- Events Table
CREATE TABLE Events (
    event_id INT PRIMARY KEY AUTO_INCREMENT,
    event_name VARCHAR(255) NOT NULL,
    event_date DATETIME NOT NULL,
    venue_id INT,
    sport_id INT,
    description TEXT,
    capacity INT,
    FOREIGN KEY (venue_id) REFERENCES Venues(venue_id),
    FOREIGN KEY (sport_id) REFERENCES Sports(sport_id)
);

-- Registrations Table
CREATE TABLE Registrations (
    registration_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    event_id INT,
    registration_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    status ENUM('pending', 'confirmed', 'cancelled') DEFAULT 'pending',
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (event_id) REFERENCES Events(event_id),
    UNIQUE (user_id, event_id)
);

-- Payments Table
CREATE TABLE Payments (
    payment_id INT PRIMARY KEY AUTO_INCREMENT,
    registration_id INT,
    amount DECIMAL(10, 2) NOT NULL,
    payment_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    payment_method VARCHAR(255),
    FOREIGN KEY (registration_id) REFERENCES Registrations(registration_id)
);

-- Sponsors Table
CREATE TABLE Sponsors (
    sponsor_id INT PRIMARY KEY AUTO_INCREMENT,
    sponsor_name VARCHAR(255) NOT NULL,
    contact_person VARCHAR(255),
    contact_email VARCHAR(255)
);

-- Event_Sponsors Table (Many-to-Many relationship)
CREATE TABLE Event_Sponsors (
    event_id INT,
    sponsor_id INT,
    PRIMARY KEY (event_id, sponsor_id),
    FOREIGN KEY (event_id) REFERENCES Events(event_id),
    FOREIGN KEY (sponsor_id) REFERENCES Sponsors(sponsor_id)
);

-- Tickets Table
CREATE TABLE Tickets (
    ticket_id INT PRIMARY KEY AUTO_INCREMENT,
    registration_id INT,
    issue_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    qr_code VARCHAR(255), -- Placeholder for a QR code or ticket identifier
    FOREIGN KEY (registration_id) REFERENCES Registrations(registration_id)
);

-- Teams Table
CREATE TABLE Teams (
    team_id INT PRIMARY KEY AUTO_INCREMENT,
    team_name VARCHAR(255) UNIQUE NOT NULL,
    sport_id INT,
    FOREIGN KEY (sport_id) REFERENCES Sports(sport_id)
);

-- Team_Members Table (Many-to-Many relationship)
CREATE TABLE Team_Members (
    team_member_id INT PRIMARY KEY AUTO_INCREMENT,
    team_id INT,
    user_id INT,
    join_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (team_id) REFERENCES Teams(team_id),
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    UNIQUE (team_id, user_id)
);

-- Trigger: Confirm registration after payment
DELIMITER $$
CREATE TRIGGER trg_confirm_registration_after_payment
AFTER INSERT ON Payments
FOR EACH ROW
BEGIN
    UPDATE Registrations
    SET status = 'confirmed'
    WHERE registration_id = NEW.registration_id;
END$$
DELIMITER ;

-- Trigger: Issue ticket upon registration confirmation
DELIMITER $$
CREATE TRIGGER trg_issue_ticket_on_confirmation
AFTER UPDATE ON Registrations
FOR EACH ROW
BEGIN
    IF NEW.status = 'confirmed' AND OLD.status != 'confirmed' THEN
        INSERT INTO Tickets (registration_id) VALUES (NEW.registration_id);
    END IF;
END$$
DELIMITER ;

-- Trigger: Prevent deletion of the last team member
DELIMITER $$
CREATE TRIGGER trg_prevent_last_team_member_deletion
BEFORE DELETE ON Team_Members
FOR EACH ROW
BEGIN
    DECLARE member_count INT;
    SELECT COUNT(*) INTO member_count FROM Team_Members WHERE team_id = OLD.team_id;
    IF member_count = 1 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Cannot delete the last member of a team.';
    END IF;
END$$
DELIMITER ;

-- Stored Procedure: Register a user to an event with capacity check
DELIMITER $$
CREATE PROCEDURE sp_register_user_to_event (
    IN p_user_id INT,
    IN p_event_id INT
)
BEGIN
    DECLARE current_registrations INT;
    DECLARE event_capacity INT;

    SELECT COUNT(*) INTO current_registrations FROM Registrations WHERE event_id = p_event_id AND status IN ('pending', 'confirmed');
    SELECT capacity INTO event_capacity FROM Events WHERE event_id = p_event_id;

    IF event_capacity IS NULL OR current_registrations < event_capacity THEN
        INSERT INTO Registrations (user_id, event_id) VALUES (p_user_id, p_event_id);
    ELSE
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Event is at capacity.';
    END IF;
END$$
DELIMITER ;

-- Stored Procedure: Add a user to a team
DELIMITER $$
CREATE PROCEDURE sp_add_user_to_team (
    IN p_team_id INT,
    IN p_user_id INT
)
BEGIN
    INSERT INTO Team_Members (team_id, user_id) VALUES (p_team_id, p_user_id);
END$$
DELIMITER ;

-- Stored Procedure: Create a team with a member
DELIMITER $$
CREATE PROCEDURE sp_create_team_with_member (
    IN p_team_name VARCHAR(255),
    IN p_sport_id INT,
    IN p_user_id INT
)
BEGIN
    DECLARE new_team_id INT;

    INSERT INTO Teams (team_name, sport_id) VALUES (p_team_name, p_sport_id);
    SET new_team_id = LAST_INSERT_ID();
    INSERT INTO Team_Members (team_id, user_id) VALUES (new_team_id, p_user_id);
END$$
DELIMITER ;

-- Stored Procedure: Add a sponsor to an event
DELIMITER $$
CREATE PROCEDURE sp_add_sponsor_to_event (
    IN p_event_id INT,
    IN p_sponsor_id INT
)
BEGIN
    INSERT INTO Event_Sponsors (event_id, sponsor_id) VALUES (p_event_id, p_sponsor_id);
END$$
DELIMITER ;

-- Stored Procedure: Make a payment
DELIMITER $$
CREATE PROCEDURE sp_make_payment (
    IN p_registration_id INT,
    IN p_amount DECIMAL(10, 2),
    IN p_payment_method VARCHAR(255)
)
BEGIN
    INSERT INTO Payments (registration_id, amount, payment_method) VALUES (p_registration_id, p_amount, p_payment_method);
END$$
DELIMITER ;