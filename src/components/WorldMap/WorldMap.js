import { ComposableMap, Geographies, Geography, Marker, Line } from "react-simple-maps";
// import "./App.css"
export const WorldMap = (props) => {
    let cities = props.selectedCities;

    return <div style={{ width: "50rem" }}>
        <ComposableMap>
            <Geographies geography="/features.json">
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography key={geo.rsmKey} geography={geo} fill="#DDD"
                            stroke="#FFF" />
                    ))
                }
            </Geographies>
            {cities["cityOne"] && <Marker coordinates={[cities["cityOne"]["value"]["Latitude"], cities["cityOne"]["value"]["Longitude"]]}>
                <circle r={2} fill="#F53" />
            </Marker>}
            {cities["cityTwo"] && <Marker coordinates={[cities["cityTwo"]["value"]["Latitude"], cities["cityTwo"]["value"]["Longitude"]]}>
                <circle r={2} fill="#F53" />
            </Marker>}
            {cities["cityThree"] && <Marker coordinates={[cities["cityThree"]["value"]["Latitude"], cities["cityThree"]["value"]["Longitude"]]}>
                <circle r={2} fill="#F53" />
            </Marker>}
            {cities["cityFour"] && <Marker coordinates={[cities["cityFour"]["value"]["Latitude"], cities["cityFour"]["value"]["Longitude"]]}>
                <circle r={2} fill="#F53" />
            </Marker>}
            {cities["cityOne"] && cities["cityTwo"] &&
                <Line
                    from={[cities["cityOne"]["value"]["Latitude"], cities["cityOne"]["value"]["Longitude"]]}
                    to={[cities["cityTwo"]["value"]["Latitude"], cities["cityTwo"]["value"]["Longitude"]]}
                    stroke="#FF5533"
                    strokeWidth={1}
                    strokeLinecap="round"
                />}
            {cities["cityOne"] && cities["cityThree"] &&
                <Line
                    from={[cities["cityOne"]["value"]["Latitude"], cities["cityOne"]["value"]["Longitude"]]}
                    to={[cities["cityThree"]["value"]["Latitude"], cities["cityThree"]["value"]["Longitude"]]}
                    stroke="#FF5533"
                    strokeWidth={1}
                    strokeLinecap="round"
                />}
            {cities["cityOne"] && cities["cityFour"] &&
                <Line
                    from={[cities["cityOne"]["value"]["Latitude"], cities["cityOne"]["value"]["Longitude"]]}
                    to={[cities["cityFour"]["value"]["Latitude"], cities["cityFour"]["value"]["Longitude"]]}
                    stroke="#FF5533"
                    strokeWidth={1}
                    strokeLinecap="round"
                />}
            {/* {
                Object.keys(cities).forEach(city => {
                    if (cities[city]) console.log(cities[city]["value"]["Latitude"])
                    return cities[city] ? <Marker coordinates={[cities[city]["value"]["Latitude"], cities[city]["value"]["Longitude"]]}>
                        <circle r={2} fill="#F53" />
                    </Marker> : null
                })
            } */}
        </ComposableMap>
    </div>
}