--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1
-- Dumped by pg_dump version 15.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: messages; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.messages (
    id integer NOT NULL,
    info jsonb NOT NULL
);


ALTER TABLE public.messages OWNER TO postgres;

--
-- Name: messages_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.messages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.messages_id_seq OWNER TO postgres;

--
-- Name: messages_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.messages_id_seq OWNED BY public.messages.id;


--
-- Name: properties; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.properties (
    id bigint NOT NULL,
    property_code character varying(100),
    property_name character varying(200),
    property_domain character varying(100),
    property_owner bigint,
    created_at date,
    updated_at date
);


ALTER TABLE public.properties OWNER TO postgres;

--
-- Name: properties_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.properties ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.properties_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id bigint NOT NULL,
    full_name character varying(100),
    birthdate date,
    cpf character varying(14),
    email character varying(100),
    password character varying(100),
    phone character varying(20),
    profile_img character varying(100),
    status integer DEFAULT 0,
    ip character varying(50),
    created_at date,
    updated_at date
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.users ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: messages id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.messages ALTER COLUMN id SET DEFAULT nextval('public.messages_id_seq'::regclass);


--
-- Data for Name: messages; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.messages (id, info) FROM stdin;
1	{"name": "Walter", "message": "What u need?", "room_id": "340", "msg_time": "2022-12-03 19:51:15", "sender_id": "203", "property_id": "1"}
2	{"name": "Walter", "message": "How can I help?", "room_id": "340", "msg_time": "2022-12-03 19:51:15", "sender_id": "203", "property_id": "1"}
3	{"name": "Walter", "message": "Tô curtindo...", "room_id": "340", "msg_time": "2022-12-03 19:57:03", "sender_id": "203", "property_id": "1"}
4	{"name": "Walter", "message": "Tente outra vez!", "room_id": "340", "msg_time": "2022-12-03 20:32:39", "sender_id": "203", "property_id": "1"}
5	{"name": "Walter", "message": "Nice", "room_id": "340", "msg_time": "2022-12-03 20:32:39", "sender_id": "203", "property_id": "1"}
6	{"name": "Walter", "message": "Vamos tentar de novo, mandrião!", "room_id": "340", "msg_time": "2022-12-04 10:37:25", "sender_id": "203", "property_id": "1"}
7	{"name": "Murilo", "message": "Vou mandar uma procê", "room_id": "340", "msg_time": "2022-12-04 11:27:17", "sender_id": "204", "property_id": "1"}
8	{"name": "Walter", "message": "Veio aqui, bro...", "room_id": "340", "msg_time": "2022-12-04 11:27:17", "sender_id": "203", "property_id": "1"}
9	{"name": "Murilo", "message": "Parece que o trem deu certo aqui", "room_id": "340", "msg_time": "2022-12-04 11:27:17", "sender_id": "204", "property_id": "1"}
10	{"name": "Walter", "message": "Tudo certo por aí?", "room_id": "340", "msg_time": "2022-12-04 11:27:17", "sender_id": "203", "property_id": "1"}
11	{"name": "Murilo", "message": "Deu sim, bro", "room_id": "340", "msg_time": "2022-12-04 11:27:17", "sender_id": "204", "property_id": "1"}
12	{"name": "Murilo", "message": "Vou tentar aqui", "room_id": "340", "msg_time": "2022-12-04 11:27:17", "sender_id": "204", "property_id": "1"}
13	{"name": "Walter", "message": "Não veio", "room_id": "340", "msg_time": "2022-12-04 11:27:17", "sender_id": "203", "property_id": "1"}
14	{"name": "Murilo", "message": "E agora?", "room_id": "340", "msg_time": "2022-12-04 11:27:17", "sender_id": "204", "property_id": "1"}
15	{"name": "Murilo", "message": "Funcionou aí?", "room_id": "340", "msg_time": "2022-12-04 11:27:17", "sender_id": "204", "property_id": "1"}
16	{"name": "Murilo", "message": "Manda mais um...", "room_id": "340", "msg_time": "2022-12-04 11:27:17", "sender_id": "204", "property_id": "1"}
17	{"name": "Walter", "message": "Só mais um?", "room_id": "340", "msg_time": "2022-12-04 11:27:17", "sender_id": "203", "property_id": "1"}
18	{"name": "Murilo", "message": "E agora?", "room_id": "340", "msg_time": "2022-12-04 11:27:17", "sender_id": "204", "property_id": "1"}
19	{"name": "Murilo", "message": "Mais mais um aí, bro", "room_id": "340", "msg_time": "2022-12-04 11:27:17", "sender_id": "204", "property_id": "1"}
20	{"name": "Murilo", "message": "Só mais um", "room_id": "340", "msg_time": "2022-12-04 11:27:17", "sender_id": "204", "property_id": "1"}
21	{"name": "Walter", "message": "E agora?", "room_id": "340", "msg_time": "2022-12-04 11:27:17", "sender_id": "203", "property_id": "1"}
22	{"name": "Murilo", "message": "Agora foi...", "room_id": "340", "msg_time": "2022-12-04 11:27:17", "sender_id": "204", "property_id": "1"}
23	{"name": "Murilo", "message": "Manda alguma coisa aí agora..", "room_id": "340", "msg_time": "2022-12-04 12:15:23", "sender_id": "204", "property_id": "1"}
24	{"name": "Murilo", "message": "Tentando...", "room_id": "340", "msg_time": "2022-12-04 12:19:20", "sender_id": "204", "property_id": "1"}
25	{"name": "Murilo", "message": "E agora?", "room_id": "340", "msg_time": "2022-12-04 12:22:24", "sender_id": "204", "property_id": "1"}
26	{"name": "Murilo", "message": "Vamos lá, campeão?", "room_id": "340", "msg_time": "2022-12-04 12:36:38", "sender_id": "204", "property_id": "1"}
27	{"name": "Walter", "message": "Tamo junto, tio rs", "room_id": "340", "msg_time": "2022-12-04 12:36:38", "sender_id": "203", "property_id": "1"}
28	{"name": "Murilo", "message": "Tô ligado rs", "room_id": "340", "msg_time": "2022-12-04 12:36:38", "sender_id": "204", "property_id": "1"}
29	{"name": "Murilo", "message": "Manda mais uma", "room_id": "340", "msg_time": "2022-12-04 12:36:38", "sender_id": "204", "property_id": "1"}
30	{"name": "Walter", "message": "Chegou rs", "room_id": "340", "msg_time": "2022-12-04 12:36:38", "sender_id": "203", "property_id": "1"}
31	{"name": "Murilo", "message": "Mais mais um, bro rs", "room_id": "340", "msg_time": "2022-12-04 12:36:38", "sender_id": "204", "property_id": "1"}
32	{"name": "Walter", "message": "Recebi, chefe rs", "room_id": "340", "msg_time": "2022-12-04 12:36:38", "sender_id": "203", "property_id": "1"}
33	{"name": "Murilo", "message": "Td bem por aí?", "room_id": "340", "msg_time": "2022-12-04 12:36:38", "sender_id": "204", "property_id": "1"}
34	{"name": "Murilo", "message": "Td sim, e aí?", "room_id": "340", "msg_time": "2022-12-04 12:36:38", "sender_id": "204", "property_id": "1"}
35	{"name": "Murilo", "message": "Tenta de novo aí", "room_id": "340", "msg_time": "2022-12-04 12:36:38", "sender_id": "204", "property_id": "1"}
36	{"name": "Murilo", "message": "Mais um aí", "room_id": "340", "msg_time": "2022-12-04 12:36:38", "sender_id": "204", "property_id": "1"}
37	{"name": "Murilo", "message": "Pega essa!", "room_id": "340", "msg_time": "2022-12-04 12:36:38", "sender_id": "204", "property_id": "1"}
38	{"name": "Murilo", "message": "Vai mais um", "room_id": "340", "msg_time": "2022-12-04 12:36:38", "sender_id": "204", "property_id": "1"}
39	{"name": "Murilo", "message": "Mais umzinho", "room_id": "340", "msg_time": "2022-12-04 12:36:38", "sender_id": "204", "property_id": "1"}
40	{"name": "Murilo", "message": "E agora?", "room_id": "340", "msg_time": "2022-12-04 12:36:38", "sender_id": "204", "property_id": "1"}
41	{"name": "Walter", "message": "Agora foi rs", "room_id": "340", "msg_time": "2022-12-04 12:36:38", "sender_id": "203", "property_id": "1"}
42	{"name": "Murilo", "message": "Tenta pow", "room_id": "340", "msg_time": "2022-12-04 12:36:38", "sender_id": "204", "property_id": "1"}
43	{"name": "Walter", "message": "Vamo tentar, bro...", "room_id": "340", "msg_time": "2022-12-04 12:36:38", "sender_id": "203", "property_id": "1"}
44	{"name": "Walter", "message": "Vamo lá, meu chapa!", "room_id": "340", "msg_time": "2022-12-04 12:36:38", "sender_id": "203", "property_id": "1"}
45	{"name": "Walter", "message": "É isso aí!", "room_id": "340", "msg_time": "2022-12-04 12:36:38", "sender_id": "203", "property_id": "1"}
46	{"name": "Walter", "message": "Tenta aí, bro!", "room_id": "340", "msg_time": "2022-12-04 12:36:38", "sender_id": "203", "property_id": "1"}
47	{"name": "Walter", "message": "C é louco meu chapa, rs?", "room_id": "340", "msg_time": "2022-12-04 12:36:38", "sender_id": "203", "property_id": "1"}
48	{"name": "Walter", "message": "Tem que dar certo!", "room_id": "340", "msg_time": "2022-12-04 12:36:38", "sender_id": "203", "property_id": "1"}
49	{"name": "Walter", "message": "Como dizia Raul Seixas: tente outra vez!", "room_id": "340", "msg_time": "2022-12-04 12:36:38", "sender_id": "203", "property_id": "1"}
50	{"name": "Walter", "message": "Estamos tentando, rs...", "room_id": "340", "msg_time": "2022-12-04 12:36:38", "sender_id": "203", "property_id": "1"}
51	{"name": "Walter", "message": "Vamo lá rs! Mais uma vez!", "room_id": "340", "msg_time": "2022-12-04 12:36:38", "sender_id": "203", "property_id": "1"}
52	{"name": "Walter", "message": "Não custa tentar rs", "room_id": "340", "msg_time": "2022-12-04 12:36:38", "sender_id": "203", "property_id": "1"}
53	{"name": "Walter", "message": "Pois é, rs. Vamo lá, meu brother!!", "room_id": "340", "msg_time": "2022-12-04 12:36:38", "sender_id": "203", "property_id": "1"}
54	{"name": "Walter", "message": "Demais, cara! Rs", "room_id": "340", "msg_time": "2022-12-04 12:36:38", "sender_id": "203", "property_id": "1"}
55	{"name": "Walter", "message": "Tamo torcendo por eles rs", "room_id": "340", "msg_time": "2022-12-04 12:36:38", "sender_id": "203", "property_id": "1"}
56	{"name": "Walter", "message": "Isso é magnífico!", "room_id": "340", "msg_time": "2022-12-04 12:36:38", "sender_id": "203", "property_id": "1"}
57	{"name": "Murilo", "message": "E aí, vamo testar?", "room_id": "340", "msg_time": "2022-12-04 12:36:38", "sender_id": "204", "property_id": "1"}
58	{"name": "Walter", "message": "Tô testando aqui já, mandrião rs", "room_id": "340", "msg_time": "2022-12-04 12:36:38", "sender_id": "203", "property_id": "1"}
59	{"name": "Walter", "message": "Caramba rs", "room_id": "340", "msg_time": "2022-12-04 12:36:38", "sender_id": "203", "property_id": "1"}
60	{"name": "Walter", "message": "É isso aê!", "room_id": "340", "msg_time": "2022-12-04 18:47:19", "sender_id": "203", "property_id": "1"}
61	{"name": "Walter", "message": "Te disse", "room_id": "340", "msg_time": "2022-12-04 18:47:19", "sender_id": "203", "property_id": "1"}
62	{"name": "Murilo", "message": "Manda aê!", "room_id": "340", "msg_time": "2022-12-04 18:47:19", "sender_id": "204", "property_id": "1"}
63	{"name": "Walter", "message": "Tô mandando, meu chapa rs!", "room_id": "340", "msg_time": "2022-12-04 19:38:14", "sender_id": "203", "property_id": "1"}
64	{"name": "Murilo", "message": "Mais um pra vc", "room_id": "340", "msg_time": "2022-12-04 19:38:29", "sender_id": "204", "property_id": "1"}
65	{"name": "Walter", "message": "Essa data tá osso rs", "room_id": "340", "msg_time": "2022-12-04 19:45:54", "sender_id": "203", "property_id": "1"}
66	{"name": "Murilo", "message": "Pois é, vamo tentando aê...", "room_id": "340", "msg_time": "2022-12-04 19:46:22", "sender_id": "204", "property_id": "1"}
67	{"name": "Walter", "message": "Será que agora foi o bixo rs?", "room_id": "340", "msg_time": "2022-12-04 19:45:54", "sender_id": "203", "property_id": "1"}
68	{"name": "Walter", "message": "Isso não pode tá acontecendo...", "room_id": "340", "msg_time": "2022-12-04 19:49:41", "sender_id": "203", "property_id": "1"}
69	{"name": "Murilo", "message": "Agora é só testar de novo, bro...", "room_id": "340", "msg_time": "2022-12-04 19:50:03", "sender_id": "204", "property_id": "1"}
70	{"name": "Walter", "message": "Vamo converter?", "room_id": "340", "msg_time": "2022-12-04 19:51:11", "sender_id": "203", "property_id": "1"}
71	{"name": "Murilo", "message": "Vai lá rs", "room_id": "340", "msg_time": "2022-12-04 20:28:18", "sender_id": "204", "property_id": "1"}
72	{"name": "Murilo", "message": "Tô indo, bro...", "room_id": "340", "msg_time": "2022-12-04 23:04:58", "sender_id": "204", "property_id": "1"}
73	{"name": "Walter", "message": "Tá suave rs", "room_id": "340", "msg_time": "2022-12-04 23:05:05", "sender_id": "203", "property_id": "1"}
74	{"name": "Murilo", "message": "Encerrando por aqui rs", "room_id": "340", "msg_time": "2022-12-05 01:15:49", "sender_id": "204", "property_id": "1"}
75	{"name": "Murilo", "message": "Manda aí rs", "room_id": "340", "msg_time": "2022-12-05 11:36:07", "sender_id": "204", "property_id": "1"}
76	{"name": "Walter", "message": "Veio de boa", "room_id": "340", "msg_time": "2022-12-05 11:36:19", "sender_id": "203", "property_id": "1"}
77	{"name": "Walter", "message": "Vai nessa, véi!", "room_id": "340", "msg_time": "2022-12-05 15:52:48", "sender_id": "203", "property_id": "1"}
78	{"name": "Murilo", "message": "Da hoora, bro!", "room_id": "340", "msg_time": "2022-12-05 15:53:57", "sender_id": "204", "property_id": "1"}
79	{"name": "Walter", "message": "Inacreditável", "room_id": "340", "msg_time": "2022-12-05 20:01:17", "sender_id": "203", "property_id": "1"}
80	{"name": "Walter", "message": "Tô pasmo, viu?", "room_id": "340", "msg_time": "2022-12-05 20:01:34", "sender_id": "203", "property_id": "1"}
81	{"name": "Murilo", "message": "Nem me fale...", "room_id": "340", "msg_time": "2022-12-05 20:01:43", "sender_id": "204", "property_id": "1"}
82	{"name": "Walter", "message": "asdasdasdsadadas", "room_id": "340", "msg_time": "2022-12-05 20:29:21", "sender_id": "203", "property_id": "1"}
83	{"name": "Walter", "message": "Olá, mandrião!", "room_id": "340", "msg_time": "2022-12-06 14:07:00", "sender_id": "203", "property_id": "1"}
84	{"name": "Murilo", "message": "Ok, Walter", "room_id": "340", "msg_time": "2022-12-06 14:58:01", "sender_id": "204", "property_id": "1"}
85	{"name": "Walter", "message": "Mandando mais uma...", "room_id": "340", "msg_time": "2022-12-06 15:11:47", "sender_id": "203", "property_id": "1"}
86	{"name": "Murilo", "message": "Ok, recebi", "room_id": "340", "msg_time": "2022-12-06 15:11:54", "sender_id": "204", "property_id": "1"}
87	{"name": "Walter", "message": "Manda aê, campeão", "room_id": "340", "msg_time": "2022-12-06 18:01:02", "sender_id": "203", "property_id": "1"}
88	{"name": "Walter", "message": "1, 2, 3... Testando...", "room_id": "340", "msg_time": "2022-12-06 18:05:26", "sender_id": "203", "property_id": "1"}
89	{"name": "Walter", "message": "Vamo tentar, bro", "room_id": "340", "msg_time": "2022-12-06 18:06:24", "sender_id": "203", "property_id": "1"}
90	{"name": "Walter", "message": "Agora o lance é testar o envio", "room_id": "340", "msg_time": "2022-12-06 18:16:00", "sender_id": "203", "property_id": "1"}
91	{"name": "Walter", "message": "Tô mandando mais uma rs", "room_id": "340", "msg_time": "2022-12-06 18:16:19", "sender_id": "203", "property_id": "1"}
92	{"name": "Walter", "message": "Ok, mais uma!", "room_id": "340", "msg_time": "2022-12-07 14:17:49", "sender_id": "203", "property_id": "1"}
93	{"name": "Walter", "message": "Murilo?", "room_id": "340", "msg_time": "2022-12-07 14:18:01", "sender_id": "203", "property_id": "1"}
94	{"name": "Murilo", "message": "Estou aqui", "room_id": "340", "msg_time": "2022-12-07 14:18:13", "sender_id": "204", "property_id": "1"}
95	{"name": "Walter", "message": "Testando aqui bro", "room_id": "340", "msg_time": "2022-12-12 13:58:34", "sender_id": "203", "property_id": "1"}
96	{"name": "Murilo", "message": "Tudo bem por aqui", "room_id": "340", "msg_time": "2022-12-12 13:59:34", "sender_id": "204", "property_id": "1"}
97	{"name": "Murilo", "message": "Testando...", "room_id": "340", "msg_time": "2022-12-12 14:01:19", "sender_id": "204", "property_id": "1"}
98	{"name": "Walter", "message": "Recebi!!", "room_id": "340", "msg_time": "2022-12-12 14:01:30", "sender_id": "203", "property_id": "1"}
\.


--
-- Data for Name: properties; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.properties (id, property_code, property_name, property_domain, property_owner, created_at, updated_at) FROM stdin;
1	gp762nuuoqcoxypju8c569th9wz7q5	Academia do Laçador	academiadolacador.zuump.test	4	2022-12-03	\N
2	4Io2go2AupJV4Ayo22kf0zTxtpUZRQ	Academia do Laçador	academiadolacador.zuump.net	4	2022-12-12	\N
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, full_name, birthdate, cpf, email, password, phone, profile_img, status, ip, created_at, updated_at) FROM stdin;
1	Rogerio Soares	\N	\N	rogeriobsoares5@gmail.com	janioquadros89@	\N	\N	0	\N	2022-12-01	\N
2	Tulio Magalhaes	\N	\N	tuliomagalhaes@gmail.com	cassarola24@	\N	\N	0	\N	2022-11-02	\N
3	Bass Guitar	\N	\N	lbassguitar88@gmail.com	janioquadros89@	\N	\N	0	\N	2022-12-03	\N
4	Fernando Massolini	\N	\N	fernandomassolini@gmail.com	janioquadros89@	\N	\N	1	\N	2022-12-03	\N
\.


--
-- Name: messages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.messages_id_seq', 98, true);


--
-- Name: properties_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.properties_id_seq', 2, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 4, true);


--
-- Name: messages messages_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.messages
    ADD CONSTRAINT messages_pkey PRIMARY KEY (id);


--
-- Name: properties properties_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.properties
    ADD CONSTRAINT properties_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: properties pk_property_owner; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.properties
    ADD CONSTRAINT pk_property_owner FOREIGN KEY (property_owner) REFERENCES public.users(id) MATCH FULL;


--
-- PostgreSQL database dump complete
--

