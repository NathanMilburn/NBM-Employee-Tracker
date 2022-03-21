USE employees_db;

INSERT INTO department (names)
VALUES
('Sales'),
('Platform'),
('Finance'),
('IT'),
('Data QA');

INSERT INTO roles (title, salary, department_id)
VALUES
('Sales Representative', 165000, 1),
('Account Management', 113000, 1),
('Senior Software Engineer', 123000, 2),
('Junior Software Engineer', 65000, 2),
('Financial Representative', 113000, 3),
('Accountant', 63000, 3),
('Systems Analyst', 66000, 4),
('System Administrator', 110000, 4),
('Data QA Manager', 148000, 5),
('Data Analyst', 65000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Nathan', 'Milburn', 1, NULL),
('Colver', 'Jefferson', 2, 1),
('Amanda', 'Giovani', 3, NULL),
('Ryan', 'Kevinski', 4, 3),
('Byron', 'Fox', 5, NULL),
('Andrea', 'Hernandez', 6, 5),
('Kate', 'Marquet', 7, 8),
('Anna', 'Kristoph', 8, NULL),
('Tyler', 'Fangio', 9, NULL),
('Marley', 'Stevens', 10, 9),
('Liam', 'Valure', 10, 9),
('Jeff', 'Kliensfield', 10, 9);
