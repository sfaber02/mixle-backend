-- DROP DATABASE IF EXISTS mixle;
-- CREATE DATABASE mixle;

-- \c mixle;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS audio;
DROP TABLE IF EXISTS effects;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR UNIQUE NOT NULL,
    email VARCHAR UNIQUE NOT NULL,
    password VARCHAR NOT NULL,
    avaliableVotes INTEGER DEFAULT 3
);

CREATE TABLE audio (
    audio_id SERIAL PRIMARY KEY,
    title VARCHAR,
    artist VARCHAR,
    album VARCHAR,
    audio_key TEXT,
    used BOOLEAN DEFAULT false
);

CREATE TABLE effects (
    effects_id SERIAL PRIMARY KEY,
    effects_data JSON,
    audio INTEGER REFERENCES audio (audio_id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES users (user_id) ON DELETE CASCADE,
    totalVotes INTEGER DEFAULT 0 CHECK (totalVotes >= 0 )
);