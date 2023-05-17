import { Button } from "@mui/material";
import "./Dribble.css";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import  CardList from "./cards/Cards";


const Dribble = () => {
  return (
    <>
      <div className="container">
        <div className="upside">
          <div className="dropdown">
            <Select defaultValue="Following">
              <Option value="dog">Following</Option>
              <Option value="cat">Popular</Option>
              <Option value="cat">New & Noteworthy</Option>
              <Option value="cat">Marketplace</Option>
            </Select>
          </div>
          <div className="buttons">
            <Button variant="outlined">Discover</Button>
            <Button variant="outlined">Animation</Button>
            <Button variant="outlined">Branding</Button>
            <Button variant="outlined">Illustration</Button>
            <Button variant="outlined">Mobile</Button>
            <Button variant="outlined">Print</Button>
            <Button variant="outlined">Product Design</Button>
            <Button variant="outlined">Typography</Button>
            <Button variant="outlined">Web Design</Button>
          </div>
          <div className="filters">filters</div>
        </div>

        <div
          className="cards"
          style={{ marginTop: "20px", padding: "40px" }}
        >
         <CardList/>

        </div>
      </div>
    </>
  );
};

export default Dribble;
