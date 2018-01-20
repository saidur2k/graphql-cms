--
-- PostgreSQL database dump
--

-- Dumped from database version 10.1
-- Dumped by pg_dump version 10.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: PostTags; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "PostTags" (
    id integer NOT NULL,
    "postId" integer NOT NULL,
    "tagId" integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


--
-- Name: PostTags_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "PostTags_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: PostTags_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "PostTags_id_seq" OWNED BY "PostTags".id;


--
-- Name: Posts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "Posts" (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    title character varying(255) NOT NULL,
    slug character varying(255) NOT NULL,
    content character varying(255) NOT NULL,
    status boolean DEFAULT false NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


--
-- Name: Posts_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "Posts_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: Posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "Posts_id_seq" OWNED BY "Posts".id;


--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "SequelizeMeta" (
    name character varying(255) NOT NULL
);


--
-- Name: Tags; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "Tags" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    slug character varying(255) NOT NULL,
    description character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


--
-- Name: Tags_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "Tags_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: Tags_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "Tags_id_seq" OWNED BY "Tags".id;


--
-- Name: Users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "Users" (
    id integer NOT NULL,
    "firstName" character varying(255) NOT NULL,
    "lastName" character varying(255),
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


--
-- Name: Users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "Users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: Users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "Users_id_seq" OWNED BY "Users".id;


--
-- Name: PostTags id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "PostTags" ALTER COLUMN id SET DEFAULT nextval('"PostTags_id_seq"'::regclass);


--
-- Name: Posts id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "Posts" ALTER COLUMN id SET DEFAULT nextval('"Posts_id_seq"'::regclass);


--
-- Name: Tags id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "Tags" ALTER COLUMN id SET DEFAULT nextval('"Tags_id_seq"'::regclass);


--
-- Name: Users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "Users" ALTER COLUMN id SET DEFAULT nextval('"Users_id_seq"'::regclass);


--
-- Name: PostTags PostTags_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "PostTags"
    ADD CONSTRAINT "PostTags_pkey" PRIMARY KEY (id);


--
-- Name: Posts Posts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "Posts"
    ADD CONSTRAINT "Posts_pkey" PRIMARY KEY (id);


--
-- Name: Posts Posts_slug_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "Posts"
    ADD CONSTRAINT "Posts_slug_key" UNIQUE (slug);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: Tags Tags_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "Tags"
    ADD CONSTRAINT "Tags_name_key" UNIQUE (name);


--
-- Name: Tags Tags_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "Tags"
    ADD CONSTRAINT "Tags_pkey" PRIMARY KEY (id);


--
-- Name: Tags Tags_slug_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "Tags"
    ADD CONSTRAINT "Tags_slug_key" UNIQUE (slug);


--
-- Name: Users Users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "Users"
    ADD CONSTRAINT "Users_email_key" UNIQUE (email);


--
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

