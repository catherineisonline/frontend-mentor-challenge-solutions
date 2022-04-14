export default function Regions() {
    return(
      <section>
      <select class="select-region" name="region" id="">
        <option value="auto" selected disabled>Filter By Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </section>
    )
}