import Activities from "../components/organisms/Activities";
import Style from "./Home.module.css"
function Home () {

    return(
        <div id={Style.cal_home}>
            <Activities></Activities>
        </div>
    )
}

export default Home;