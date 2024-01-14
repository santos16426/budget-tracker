import { useAppContext } from "@/context";

const Home: React.FC = () => {
  const { activePage } = useAppContext();
  console.log(activePage.page);
  switch (activePage.page) {
    case "bank":
      return <div>bank</div>;
    case "tracker":
      return <div>tracker</div>;
    case "settings":
      return <div>settings</div>;
    case "dashboard":
      return <div>dashboard</div>;
    default:
      return <div>dashboard</div>;
  }
};
export default Home;
