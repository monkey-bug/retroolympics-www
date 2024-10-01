INSERT INTO users VALUES
(1, 'MonkeyBug', 1000, B'010001'),
(2, 'voiceofautumn', 1000, B'110000'),
(3, 'drisc', 1000, B'010000'),
(4, 'Daisey', 1000, B'010000'),
(5, 'Amir96lx', 1000, B'001001'),
(6, 'r0ach3d', 1000, B'000011'),
(7, 'Prota', 1000, B'000101'),
(8, 'AmazingBaha', 1000, B'000101'),
(9, 'Joncky', 1000, B'000101');

INSERT INTO teams VALUES
(1, 'Team 1'),
(2, 'Team 2'),
(3, 'Team 3');

INSERT INTO teams_users (team_id, user_id) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),

(2, 5),
(2, 6),
(2, 2),

(3, 1),
(3, 7),
(3, 8),
(3, 9);

INSERT INTO games VALUES
(1, 'Super Mario All-Stars', 'SNES', 'Fastest time to beat 1-1 in all four games.', '53c038150ba00d5f8d8574b4d36283f2'),
(2, 'Grand Theft Auto: San Andreas', 'PS2', 'Fastest time to clear Wrong Side of the Tracks.', 'fe8b1b6c64c24e7eaaef6de8af1aeb9e'),
(3, 'Super Dodge Ball', 'Fightcade', 'One match (in-game Bo3) with the team of your choice against your opponent.', NULL);

