import { Container } from "@mui/material";
import ResponsiveAppBar from "../components/Appbar/Appbar";
import HomeComponent from "../components/HomeComponent/HomeComponent";

const Home = () => {
    return (
    <Container>
        <ResponsiveAppBar />
        <HomeComponent />
    </Container>
    );
}

export default Home;