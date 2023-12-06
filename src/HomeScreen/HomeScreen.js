import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Homescreenselection from "./Homescreenselection";

function HomeScreen(props) {
  const navigate = useNavigate();
  //change this later, just an example right now
  //change this later, just an example right now
  //change this later, just an example right now
  const links = [
    {
      link: "/Lessons",
      name: "Lessons",
      desc: "Learn some coding using videos and reading material!",
      image:
        "https://images.squarespace-cdn.com/content/v1/570ebc54e32140a560e3d6d4/1610738838099-F36MYQU07CGHTKXFP941/codieclear.png?format=1500w",
      progress: "25%",
    },
    {
      link: "/PracticeProblems",
      name: "Practice Problems",
      desc: "Practice what you've learnt and get some in-depth solution walkthroughs!",
      image:
        "https://thumbs.dreamstime.com/z/retro-illustration-style-cartoon-test-paper-creative-illustrated-147659059.jpg?w=768",
      progress: "30%",
    },
    {
      link: "/Quizzes",
      name: "Quizzes",
      desc: "Test how well you've understood the lessons by taking some timed quizzes!",
      image:
        "https://img.freepik.com/premium-vector/cartoon-red-ringing-alarm-clock_81894-2843.jpg?w=740",
      progress: "35%",
    },
    {
      link: "/games",
      name: "Games",
      desc: "Practice some coding concepts by playing some fun interactive games!",
      image:
        "https://previews.123rf.com/images/thaiprayboy/thaiprayboy1901/thaiprayboy190100063/126054904-arcade-game-controller-joystick-on-isolated-white-background-cartoon-style-vector.jpg",
      progress: "5%",
    },
    {
      link: "/supplementarydocs",
      name: "Supplementary Docs",
      desc: "Access some extra resources to help you visualize and understand the lessons better!",
      image:
        "https://as1.ftcdn.net/v2/jpg/01/20/65/30/1000_F_120653052_ECItG7Cc46JZJ46B0ABlcpOLUylOnJUs.jpg",
    },
    {
      link: "/underconstruction",
      name: "Challenge Problems",
      desc: "Think you're ready for a black belt? Click here for some hardcore challenges!",
      image:
        "https://img.freepik.com/free-vector/girl-thinking-with-question-mark-callouts_1308-94466.jpg?w=740&t=st=1701231992~exp=1701232592~hmac=804fb5030bd19c07532d508606efb2e42ec9c4b3e6936ea2880f5efe15763971",
      progress: "15%",
    },
  ];
  return (
    <div style={{ marginTop: "1em" }}>
      <Homescreenselection
        links={links}
        grid={true}
        handleLanguageChange={(value) => {
          console.log(value);
        }}
        title="Learn All About "
      />
    </div>
  );
}

export default HomeScreen;
