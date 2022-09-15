import Head from "next/head"

function QnA() {
  return (<>
  <Head>
    <title>O Připomínači</title>
  </Head>
  <section id="textSection">
    <h3>Mám připomínky, návrhy či otázky, jak vás můžu kontaktovat?</h3>
    <p>Pokud chcete kontaktovat autora této aplikace, napište na email <a href="mailto:pripominacpodpora@centrum.cz">pripominacpodpora@centrum.cz</a> nebo navštivte stránku na <a href="https://github.com/MickenCZ/Pripominac">githubu</a>.</p>
    <h3>Jaké návrhy jsou vítány?</h3>
    <p>Úplně všechy, ať už jde o chyby, design, funkčnost či žádost o něco nového.</p>
    <h3>Chci vědět, jak aplikace funguje, jak se o ní můžu něco naučit?</h3>
    <p>Pokud rozumíte technologiím použitým na její vývoj, stačí se podívat na dokumentaci na <a href="https://github.com/MickenCZ/Pripominac">githubu.</a></p>
    <h3>Rád/a bych spustil/a svoji vlastní instanci Připomínače, je to možné?</h3>
    <p>Ano, stačí mě nějakým způsobem kontaktovat a můžu vám pomoci použít tento program i pro vaši školu. Samozřejmě díky open-source kódu jde toto udělat bez svolení, ale respektujte prosím licenci.</p>
    <h3>Pod jakou licencí je licencován zdrojový kód?</h3>
    <p>Jedná se o copyleft licenci GNU General Public Licence 3.0, která zajišťuje svobodné používání kódu za podmínkou atribuce a publikování změn v případě alternativní distribuce.</p>
    <h3>Co se chystá do budoucna?</h3>
    <p>Plánuje se implementace ověření účtu s Teams, aby se předešlo spamu. I když lze tuto aplikaci mít nativně na všech zařízeních + na webu, šlo by ještě připojit k jeho databázi Discord bota.</p>
  </section>
  </>)
}

export default QnA