// eslint-disable-next-line react/prop-types
export const Location = ({locationInfo}) => {
    console.log(locationInfo)
  return (
    <section>
        <form>
            <input placeholder="Type a location Id..." type="text" />
            <button>
                Search
                <img src="/header/pixelarticons_search.svg" alt="" />
            </button>
        </form>
        <article className="border">
            <h2>Wellcom to {locationInfo?.name}!</h2>
            <ul className="flex">
                <li>Type: {locationInfo?.type}</li>
                <li>Dimension: {locationInfo?.dimension}</li>
                <li>Population: {locationInfo?.residents.length}</li>
            </ul>
        </article>
    </section>
  )
}