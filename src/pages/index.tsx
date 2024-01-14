import { useAppContext } from "@/context";

const Home: React.FC = () => {
  const { activePage } = useAppContext();

  switch (activePage.page) {
    case "users":
      return <div>users</div>;
    case "bank":
      return <div>bank</div>;
    case "income":
      return <div>income</div>;
    case "expense":
      return <div>expense</div>;
    default:
      return (
        <div className="w-full h-full flex flex-col justify-center items-center">
          Welcome to budget tracker
        </div>
      );
  }
};
export default Home;
