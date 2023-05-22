--
-- PostgreSQL database dump
--

-- Dumped from database version 14.7 (Ubuntu 14.7-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.7 (Ubuntu 14.7-0ubuntu0.22.04.1)

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
-- Name: adresler; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.adresler (
    id integer NOT NULL,
    il character varying(50) NOT NULL,
    ilce character varying(50) NOT NULL,
    mahalle character varying(50) NOT NULL,
    cadde character varying(50) NOT NULL,
    sokak character varying(50) NOT NULL,
    bina_no integer NOT NULL,
    kat integer NOT NULL,
    posta_kodu integer NOT NULL
);


ALTER TABLE public.adresler OWNER TO postgres;

--
-- Name: adresler_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.adresler_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.adresler_id_seq OWNER TO postgres;

--
-- Name: adresler_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.adresler_id_seq OWNED BY public.adresler.id;


--
-- Name: emanet; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.emanet (
    id integer NOT NULL,
    fk_kitap integer NOT NULL,
    fk_uye integer NOT NULL,
    emanet_tarihi date NOT NULL,
    teslim_tarihi date NOT NULL
);


ALTER TABLE public.emanet OWNER TO postgres;

--
-- Name: emanet_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.emanet_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.emanet_id_seq OWNER TO postgres;

--
-- Name: emanet_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.emanet_id_seq OWNED BY public.emanet.id;


--
-- Name: kategoriler; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.kategoriler (
    id integer NOT NULL,
    ad character varying(50) NOT NULL
);


ALTER TABLE public.kategoriler OWNER TO postgres;

--
-- Name: kategoriler_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.kategoriler_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.kategoriler_id_seq OWNER TO postgres;

--
-- Name: kategoriler_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.kategoriler_id_seq OWNED BY public.kategoriler.id;


--
-- Name: kitap_kategori; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.kitap_kategori (
    id integer NOT NULL,
    fk_kitap integer NOT NULL,
    fk_kategori integer NOT NULL
);


ALTER TABLE public.kitap_kategori OWNER TO postgres;

--
-- Name: kitap_kategori_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.kitap_kategori_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.kitap_kategori_id_seq OWNER TO postgres;

--
-- Name: kitap_kategori_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.kitap_kategori_id_seq OWNED BY public.kitap_kategori.id;


--
-- Name: kitap_kutuphane; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.kitap_kutuphane (
    id integer NOT NULL,
    fk_kitap integer NOT NULL,
    fk_kutuphane integer NOT NULL,
    adet integer NOT NULL
);


ALTER TABLE public.kitap_kutuphane OWNER TO postgres;

--
-- Name: kitap_kutuphane_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.kitap_kutuphane_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.kitap_kutuphane_id_seq OWNER TO postgres;

--
-- Name: kitap_kutuphane_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.kitap_kutuphane_id_seq OWNED BY public.kitap_kutuphane.id;


--
-- Name: kitap_yazar; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.kitap_yazar (
    id integer NOT NULL,
    fk_kitap integer NOT NULL,
    fk_yazar integer NOT NULL
);


ALTER TABLE public.kitap_yazar OWNER TO postgres;

--
-- Name: kitap_yazar_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.kitap_yazar_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.kitap_yazar_id_seq OWNER TO postgres;

--
-- Name: kitap_yazar_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.kitap_yazar_id_seq OWNED BY public.kitap_yazar.id;


--
-- Name: kitaplar; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.kitaplar (
    id integer NOT NULL,
    ad character varying(50) NOT NULL,
    isbn character varying(50) NOT NULL,
    sayfa_sayisi integer NOT NULL,
    yayin_tarihi date NOT NULL,
    fk_yayin integer NOT NULL
);


ALTER TABLE public.kitaplar OWNER TO postgres;

--
-- Name: kitaplar_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.kitaplar_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.kitaplar_id_seq OWNER TO postgres;

--
-- Name: kitaplar_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.kitaplar_id_seq OWNED BY public.kitaplar.id;


--
-- Name: kutuphaneler; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.kutuphaneler (
    id integer NOT NULL,
    ad character varying(50) NOT NULL,
    fk_adres integer NOT NULL
);


ALTER TABLE public.kutuphaneler OWNER TO postgres;

--
-- Name: kutuphaneler_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.kutuphaneler_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.kutuphaneler_id_seq OWNER TO postgres;

--
-- Name: kutuphaneler_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.kutuphaneler_id_seq OWNED BY public.kutuphaneler.id;


--
-- Name: uyeler; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.uyeler (
    id integer NOT NULL,
    ad character varying(50) NOT NULL,
    soyad character varying(50) NOT NULL,
    cinsiyet character varying(10) NOT NULL,
    eposta character varying(50) NOT NULL,
    telefon character varying(50) NOT NULL,
    fk_adres integer NOT NULL
);


ALTER TABLE public.uyeler OWNER TO postgres;

--
-- Name: uyeler_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.uyeler_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.uyeler_id_seq OWNER TO postgres;

--
-- Name: uyeler_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.uyeler_id_seq OWNED BY public.uyeler.id;


--
-- Name: yayinevler; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.yayinevler (
    id integer NOT NULL,
    ad character varying(50) NOT NULL,
    fk_adres integer NOT NULL
);


ALTER TABLE public.yayinevler OWNER TO postgres;

--
-- Name: yayinevler_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.yayinevler_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.yayinevler_id_seq OWNER TO postgres;

--
-- Name: yayinevler_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.yayinevler_id_seq OWNED BY public.yayinevler.id;


--
-- Name: yazarlar; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.yazarlar (
    id integer NOT NULL,
    ad character varying(50) NOT NULL,
    soyad character varying(50) NOT NULL
);


ALTER TABLE public.yazarlar OWNER TO postgres;

--
-- Name: yazarlar_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.yazarlar_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.yazarlar_id_seq OWNER TO postgres;

--
-- Name: yazarlar_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.yazarlar_id_seq OWNED BY public.yazarlar.id;


--
-- Name: adresler id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adresler ALTER COLUMN id SET DEFAULT nextval('public.adresler_id_seq'::regclass);


--
-- Name: emanet id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.emanet ALTER COLUMN id SET DEFAULT nextval('public.emanet_id_seq'::regclass);


--
-- Name: kategoriler id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.kategoriler ALTER COLUMN id SET DEFAULT nextval('public.kategoriler_id_seq'::regclass);


--
-- Name: kitap_kategori id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.kitap_kategori ALTER COLUMN id SET DEFAULT nextval('public.kitap_kategori_id_seq'::regclass);


--
-- Name: kitap_kutuphane id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.kitap_kutuphane ALTER COLUMN id SET DEFAULT nextval('public.kitap_kutuphane_id_seq'::regclass);


--
-- Name: kitap_yazar id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.kitap_yazar ALTER COLUMN id SET DEFAULT nextval('public.kitap_yazar_id_seq'::regclass);


--
-- Name: kitaplar id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.kitaplar ALTER COLUMN id SET DEFAULT nextval('public.kitaplar_id_seq'::regclass);


--
-- Name: kutuphaneler id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.kutuphaneler ALTER COLUMN id SET DEFAULT nextval('public.kutuphaneler_id_seq'::regclass);


--
-- Name: uyeler id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.uyeler ALTER COLUMN id SET DEFAULT nextval('public.uyeler_id_seq'::regclass);


--
-- Name: yayinevler id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.yayinevler ALTER COLUMN id SET DEFAULT nextval('public.yayinevler_id_seq'::regclass);


--
-- Name: yazarlar id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.yazarlar ALTER COLUMN id SET DEFAULT nextval('public.yazarlar_id_seq'::regclass);


--
-- Data for Name: adresler; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.adresler (id, il, ilce, mahalle, cadde, sokak, bina_no, kat, posta_kodu) FROM stdin;
1	Kirsehir	Merkez	Bagbasi	Necdet Yagiz	195	10	3	40100
2	Kirsehir	Merkez	Bagbasi	Necdet Yagiz	195	10	3	40100
3	Kirsehir	Merkez	Bagbasi	Necdet Yagiz	195	10	3	40100
4	Kirsehir	Merkez	Bagbasi	Necdet Yagiz	195	10	3	40100
8	Kirsehir	Merkez	Bagbasi	Necdet Yagiz	195	10	3	40100
5	Kirsehir	Merkez	Bagbasi	Necdet Yagiz	195	10	5	40100
11	Kirsehir	Merkez	Bagbasi	Necdet Yagiz	85	5	3	40100
6	Kirsehir	Merkez	Bagbasi	Necdet Yagiz	195	10	5	40100
\.


--
-- Data for Name: emanet; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.emanet (id, fk_kitap, fk_uye, emanet_tarihi, teslim_tarihi) FROM stdin;
\.


--
-- Data for Name: kategoriler; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.kategoriler (id, ad) FROM stdin;
2	Polisiye
3	Biyagrafi
4	Roman
5	Roman
6	Biyagrafi
\.


--
-- Data for Name: kitap_kategori; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.kitap_kategori (id, fk_kitap, fk_kategori) FROM stdin;
3	5	5
4	5	6
\.


--
-- Data for Name: kitap_kutuphane; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.kitap_kutuphane (id, fk_kitap, fk_kutuphane, adet) FROM stdin;
2	5	1	5
\.


--
-- Data for Name: kitap_yazar; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.kitap_yazar (id, fk_kitap, fk_yazar) FROM stdin;
2	5	4
\.


--
-- Data for Name: kitaplar; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.kitaplar (id, ad, isbn, sayfa_sayisi, yayin_tarihi, fk_yayin) FROM stdin;
5	Anna Karenina	88937879192	260	2022-10-02	1
\.


--
-- Data for Name: kutuphaneler; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.kutuphaneler (id, ad, fk_adres) FROM stdin;
1	Neset Ertas Kutuphanesi	5
\.


--
-- Data for Name: uyeler; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.uyeler (id, ad, soyad, cinsiyet, eposta, telefon, fk_adres) FROM stdin;
1	Chary	Nepesov	Erkek	charydevel@gmail.com	05511501639	8
\.


--
-- Data for Name: yayinevler; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.yayinevler (id, ad, fk_adres) FROM stdin;
3	Turkiye Is Bankasi Yayinlari	11
1	Hazar Yayinlari	6
\.


--
-- Data for Name: yazarlar; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.yazarlar (id, ad, soyad) FROM stdin;
1	Anna	Karenina
3	Anna	Karenina
4	Anna	Karenina
\.


--
-- Name: adresler_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.adresler_id_seq', 11, true);


--
-- Name: emanet_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.emanet_id_seq', 1, false);


--
-- Name: kategoriler_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.kategoriler_id_seq', 6, true);


--
-- Name: kitap_kategori_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.kitap_kategori_id_seq', 4, true);


--
-- Name: kitap_kutuphane_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.kitap_kutuphane_id_seq', 2, true);


--
-- Name: kitap_yazar_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.kitap_yazar_id_seq', 2, true);


--
-- Name: kitaplar_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.kitaplar_id_seq', 5, true);


--
-- Name: kutuphaneler_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.kutuphaneler_id_seq', 2, true);


--
-- Name: uyeler_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.uyeler_id_seq', 2, true);


--
-- Name: yayinevler_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.yayinevler_id_seq', 3, true);


--
-- Name: yazarlar_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.yazarlar_id_seq', 4, true);


--
-- Name: adresler adresler_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adresler
    ADD CONSTRAINT adresler_pkey PRIMARY KEY (id);


--
-- Name: emanet emanet_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.emanet
    ADD CONSTRAINT emanet_pkey PRIMARY KEY (id);


--
-- Name: kategoriler kategoriler_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.kategoriler
    ADD CONSTRAINT kategoriler_pkey PRIMARY KEY (id);


--
-- Name: kitap_kategori kitap_kategori_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.kitap_kategori
    ADD CONSTRAINT kitap_kategori_pkey PRIMARY KEY (id);


--
-- Name: kitap_kutuphane kitap_kutuphane_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.kitap_kutuphane
    ADD CONSTRAINT kitap_kutuphane_pkey PRIMARY KEY (id);


--
-- Name: kitap_yazar kitap_yazar_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.kitap_yazar
    ADD CONSTRAINT kitap_yazar_pkey PRIMARY KEY (id);


--
-- Name: kitaplar kitaplar_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.kitaplar
    ADD CONSTRAINT kitaplar_pkey PRIMARY KEY (id);


--
-- Name: kutuphaneler kutuphaneler_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.kutuphaneler
    ADD CONSTRAINT kutuphaneler_pkey PRIMARY KEY (id);


--
-- Name: uyeler uyeler_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.uyeler
    ADD CONSTRAINT uyeler_pkey PRIMARY KEY (id);


--
-- Name: yayinevler yayinevler_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.yayinevler
    ADD CONSTRAINT yayinevler_pkey PRIMARY KEY (id);


--
-- Name: yazarlar yazarlar_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.yazarlar
    ADD CONSTRAINT yazarlar_pkey PRIMARY KEY (id);


--
-- Name: kitap_yazar kitap_yazar_fk_kitap_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.kitap_yazar
    ADD CONSTRAINT kitap_yazar_fk_kitap_fkey FOREIGN KEY (fk_kitap) REFERENCES public.kitaplar(id) NOT VALID;


--
-- Name: kitap_yazar kitap_yazar_fk_yazar_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.kitap_yazar
    ADD CONSTRAINT kitap_yazar_fk_yazar_fkey FOREIGN KEY (fk_yazar) REFERENCES public.yazarlar(id) NOT VALID;


--
-- Name: kitaplar kitaplar_fk_yayin_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.kitaplar
    ADD CONSTRAINT kitaplar_fk_yayin_fkey FOREIGN KEY (fk_yayin) REFERENCES public.yayinevler(id) NOT VALID;


--
-- Name: kutuphaneler kutuphaneler_fk_adres_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.kutuphaneler
    ADD CONSTRAINT kutuphaneler_fk_adres_fkey FOREIGN KEY (fk_adres) REFERENCES public.adresler(id) NOT VALID;


--
-- Name: uyeler uyeler_fk_adres_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.uyeler
    ADD CONSTRAINT uyeler_fk_adres_fkey FOREIGN KEY (fk_adres) REFERENCES public.adresler(id) NOT VALID;


--
-- Name: yayinevler yayinevler_fk_adres_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.yayinevler
    ADD CONSTRAINT yayinevler_fk_adres_fkey FOREIGN KEY (fk_adres) REFERENCES public.adresler(id) NOT VALID;


--
-- PostgreSQL database dump complete
--

