INSERT INTO department (names)
VALUES
('Platform'),
('Human Relations'),
('Sales'),
('Customer Success'),
('Data QA');

INSERT INTO roles (title, salary, department_id)
VALUES
('Software Engineer', 103000, 1),
('Senior Software Engineer', 123000, 1),
('Systems Analyst', 67000, 1),
('Human Relations Representative', 83000, 2),
('Sales Operator', 157000, 3),
('Accountant', 93000, 3),
('Customer Relations Operator', 109000, 4),
('Data Analyst', 63000, 5),
('Senior Data Analyst', 87000, 5),
('Quality Assurance Manager', 131000, 5),

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Nathan','Milburn', 1, 2),
('Ryan','Kevinski', 2, 3),
('Andrea','Hernandez', 3, NULL),
('Byron','Fox', 4, NULL),
('Kate','Marquet', 5, NULL),
('Anna','Kristoph', 6, 5),
('Tyler','Fangio', 7, NULL),
('Marley','Stevens', 8, 10),
('Liam','Valure', 9, 10),
('Jeff','Kliensfield', 10, NULL),