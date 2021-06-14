INSERT INTO department (name)
  VALUES ('Engineering'),
         ('Finance'),
         ('IT'),
         ('Legal'),
         ('Sales'),
         ('CEO');

INSERT INTO role (title, salary, department_id)
  VALUES ('Salesperson', 75000, 5),
         ('Customer Support', 55000, 5),
         ('Attorney', 100000, 4),
         ('Accountant', 85000, 2),
         ('Auditor', 75000, 2),
         ('IT Coordinator', 125000, 3),
         ('Network Technician', 70000, 3),
         ('IT Technician', 50000, 3),
         ('Senior Software Engineer', 175000, 1),
         ('Software Engineer', 120000, 1),
         ('Quality Assurance Tester', 75000, 1),
         ('CEO', 100000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
  VALUES ('Walt', 'Disney', 12, NULL),
         ('Mickey', 'Mouse', 10, 1),
         ('Minnie', 'Mouse', 1, 1),
         ('Donald', 'Duck', 7, 2),
         ('Buzz', 'Lightyear', 5, 1),
         ('Michael', 'Jordan', 8, 4),
         ('Barry', 'Bonds', 4, 1),
         ('Tim', 'Lincecum', 2, 3),
         ('Bruce', 'Wayne', 6, 5),
         ('Peter', 'Griffin', 9, 4);
