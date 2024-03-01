const knex = require('../knex/config/database')
const query = `
INSERT INTO users (
  first_name,
  last_name,
  email,
  password_hash,
  created_at,
  salary
)
VALUES 
("Tanner", "Mayo", "vitae.diam@consectetueripsum.ca", "QLN12HIN3RL", "2021-07-25 22:12:26", 52000.50),
("Brittany", "Stewart", "nibh.sit@nunc.edu", "ROM35HMM4SA", "2020-08-22 13:41:06", 62000.25),
("Ferris", "Hall", "neque.Morbi@porttitorscelerisqueneque.edu", "YTU15GQR9HT", "2020-02-28 05:52:36", 45000.75),
("Jacob", "Manning", "risus.at@sociis.edu", "EQS93HLI6QZ", "2021-04-22 06:01:30", 75000.00),
("Keelie", "Petersen", "Nulla@lobortis.org", "ZHE87TSO6DA", "2021-07-10 20:51:19", 60000.80),
("Benjamin", "Daniels", "nec@dolor.org", "CNW39GMH4NZ", "2021-01-30 22:33:14", 48000.30),
("Aspen", "Cain", "Nullam.ut@primisinfaucibus.com", "ZFC58TUT0MB", "2020-06-12 14:52:39", 55000.65),
("Oprah", "Reeves", "nisi.nibh.lacinia@mattissemper.net", "LYD20HWD3UN", "2020-03-05 13:41:49", 68000.40),
("Lynn", "Hendricks", "neque.tellus.imperdiet@dolor.net", "CRA59DIT0TW", "2020-04-12 15:26:28", 72000.20),
("Wayne", "Walters", "torquent.per.conubia@Utsagittislobortis.co.uk", "BVD19AUV2JO", "2020-10-04 03:36:24", 59000.90),
("Shana", "Barnett", "tempus.scelerisque@lectusjustoeu.net", "GXF87LGA4XZ", "2020-01-26 04:16:58", 58000.75),
("Merrill", "Dunn", "a.feugiat.tellus@CuraePhasellus.ca", "BQS83WCA3QM", "2021-05-27 20:27:02", 62000.50),
("Minerva", "Craft", "ac.mattis@liberoIntegerin.ca", "XAX94LBA7BI", "2021-11-17 20:14:37", 70000.25),
("Ishmael", "Garcia", "Nunc.sed@tellus.co.uk", "MYA25WWC2HB", "2020-04-15 17:51:28", 53000.80),
("Xyla", "Rocha", "mi.enim.condimentum@faucibus.ca", "NJB51CIZ2YT", "2021-10-11 14:19:33", 59000.30),
("Giacomo", "Kidd", "quis.diam@convallisin.com", "QAM99GPQ0BE", "2020-05-14 16:04:51", 64000.90),
("Lucian", "Shepherd", "dis@Integervulputate.co.uk", "PKI61CTD1WE", "2021-02-20 06:42:36", 56000.65),
("Iona", "Gillespie", "ac.facilisis@vitae.org", "THH68JIH4QZ", "2020-08-27 05:26:00", 61000.40),
("Nyssa", "Roberson", "massa.Suspendisse@nisidictumaugue.co.uk", "VOW26KCN4CZ", "2021-01-11 19:18:46", 72000.80),
("Lacy", "Guthrie", "purus@ullamcorper.net", "NGL35MWG5OL", "2020-03-15 04:05:58", 54000.50),
("Karina", "Carson", "a.aliquet@cursusaenim.org", "RMZ97KTB0LP", "2020-11-09 01:34:20", 63000.25),
("Carly", "Wilkinson", "egestas.a.dui@utcursusluctus.co.uk", "YUS28DJB5UR", "2021-05-28 19:43:17", 69000.70),
("Madison", "Pierce", "arcu.eu@antelectus.edu", "JVZ98CGE6XW", "2020-09-04 19:06:55", 57000.35),
("Carly", "Guerrero", "feugiat.non.lobortis@porttitorvulputate.ca", "HAS68KVZ2IW", "2021-01-26 02:40:51", 68000.45),
("Eric", "Cash", "Aenean.eget@libero.ca", "JTY19RSK6AY", "2021-08-28 16:36:43", 64000.60),
("Hannah", "Pitts", "dapibus.ligula.Aliquam@magnaPhasellusdolor.ca", "OMF54AOD3FM", "2021-08-28 19:44:45", 71000.55),
("Gray", "Barnes", "Aenean.egestas.hendrerit@pharetranibh.edu", "RUY00LNZ4XD", "2021-02-09 12:08:06", 59000.70),
("Seth", "Duke", "ante.ipsum.primis@Quisque.ca", "YUA24MFN1ES", "2020-09-27 01:28:26", 60000.85),
("Leandra", "Ratliff", "Suspendisse@feugiatSednec.edu", "HSC55TYX0JV", "2020-01-25 09:46:01", 55000.40),
("Jillian", "Lamb", "arcu@rutrum.org", "DWR34TLE3MF", "2020-06-07 09:55:48", 67000.75),
("Baker", "Richards", "elit@Maecenasmalesuada.edu", "UPI22LBI7ZW", "2020-02-22 22:36:48", 58000.30),
("Kennan", "Callahan", "tortor.dictum.eu@intempus.org", "GEL99BNX1UJ", "2021-12-03 20:48:09", 72000.60),
("Hedy", "Kim", "amet@cursusinhendrerit.com", "NZR75UQU2MQ", "2020-12-27 02:47:14", 66000.40),
("Dolan", "Pearson", "semper.tellus.id@fringillaporttitor.edu", "HXS85QIR7YW", "2021-06-12 00:11:24", 59000.25),
("Tanisha", "Atkins", "convallis.ante@id.org", "QFN12VIE2CM", "2021-09-07 00:41:28", 67000.80),
("Hedwig", "Freeman", "elit.Curabitur@dolorvitaedolor.co.uk", "WFW24JAV6HV", "2020-07-19 17:14:29", 64000.50),
("Xanthus", "Dejesus", "diam@Suspendisse.co.uk", "FDB64NOK6HP", "2020-02-16 20:16:21", 57000.75),
("Xavier", "Walton", "magna.Phasellus@orci.co.uk", "ROH80LTQ3UL", "2021-04-09 23:42:08", 69000.60),
("Melissa", "Boone", "Nullam.scelerisque.neque@imperdietdictummagna.com", "ILA84FVZ1LT", "2021-01-02 11:12:48", 62000.45),
("Elijah", "Espinoza", "Nunc.ac.sem@necimperdietnec.edu", "CUY37VUP3IR", "2020-01-31 13:09:25", 58000.80),
("Xena", "Aguirre", "mollis.Integer@Phasellus.edu", "TGB25KRR0VO", "2020-03-10 08:58:41", 62000.65),
("Hayfa", "Powers", "posuere.at.velit@fringillaporttitor.edu", "TEO28VNF5BU", "2021-01-18 08:44:16", 61000.75),
("Armando", "Nunez", "nulla.ante.iaculis@Morbiaccumsanlaoreet.ca", "XUT85OLS0CA", "2021-11-07 05:13:37", 67000.45),
("Hayley", "Stanley", "ipsum.Suspendisse@velit.edu", "SWB87FCO7UY", "2020-04-20 07:20:53", 63000.60),
("Zia", "Elliott", "In.lorem.Donec@mattis.com", "SXA35NRK8LC", "2021-09-08 10:45:44", 64000.85),
("Vernon", "Wolf", "porttitor.scelerisque.neque@disparturient.net", "RSJ71EFP1HP", "2020-05-17 20:37:24", 58000.70),
("Zachery", "Copeland", "libero@anunc.edu", "HTN15HIK1JO", "2020-05-12 02:22:09", 59000.50),
("Hayfa", "Tanner", "dignissim.Maecenas@eueros.co.uk", "VFK34JGG4GH", "2020-07-08 00:25:22", 67000.40),
("Rosalyn", "Mercado", "ullamcorper.nisl.arcu@eunequepellentesque.org", "YZT80OSH6AS", "2021-09-04 11:33:50", 65000.75),
("Kalia", "Russell", "Pellentesque@placerat.net", "GHM91NMW9XI", "2021-09-07 18:07:42", 63000.60),
("Xavier", "Coleman", "Proin@velitAliquamnisl.net", "TES61QXM8OK", "2020-10-11 20:29:25", 61000.85),
("Jaime", "Dalton", "lorem.semper.auctor@fringillaornareplacerat.co.uk", "IZN87CKQ8NY", "2021-06-04 02:43:01", 69000.25),
("Magee", "Wynn", "non.egestas.a@cubiliaCuraePhasellus.co.uk", "XBZ84QFE1QJ", "2021-07-10 21:33:24", 67000.45),
("Alika", "Sims", "augue.ut@Nullasemper.edu", "IZH92SNA7CY", "2021-07-28 20:20:41", 66000.70),
("Xyla", "Fletcher", "est.Nunc.ullamcorper@vestibulum.ca", "JCW18ISX7FC", "2020-02-19 15:33:39", 59000.80),
("Tatum", "Houston", "elementum@rutrumnonhendrerit.com", "UGI43ADF3ZF", "2019-12-29 01:46:33", 60000.60),
("Hilda", "Graves", "Nullam.ut.nisi@arcuMorbisit.org", "ZXM84DUO5RH", "2020-12-16 14:48:40", 65000.40),
("Jordan", "Gould", "turpis.vitae@penatibus.edu", "SDR33TEI1JY", "2020-01-21 07:33:05", 63000.75),
("Iris", "Whitehead", "massa@egestasSedpharetra.com", "POB14LPE6JA", "2021-08-30 03:23:44", 68000.85),
("Tanek", "English", "metus.vitae.velit@inmagna.com", "NDC34LGD4UO", "2021-03-23 19:31:26", 66000.55),
("Fitzgerald", "Dickson", "ac.feugiat@ullamcorper.edu", "BVE71ESA2VJ", "2020-05-01 23:14:53", 67000.60),
("Allen", "Cotton", "placerat.Cras@quamdignissimpharetra.ca", "NRY69AEP4GD", "2020-01-01 04:24:42", 62000.75)
`


knex.raw(query).then(data => {
  console.log(data)
}).catch(err => {
  console.error(err)
}).finally(() => {
  knex.destroy()
})