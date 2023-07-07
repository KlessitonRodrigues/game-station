import PageContainer from "src/UI/components/PageContainer";
import useLangContext from "src/hooks/useLangContext";

const HomePage = () => {
  const [lang] = useLangContext();

  return (
    <PageContainer>
      <div>Hello</div>
    </PageContainer>
  );
};

export default HomePage;
