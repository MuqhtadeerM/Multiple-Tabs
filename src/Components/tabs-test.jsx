import Tabs from "./tabs";

const RandomComponent = () => {
  return (
    <div style={{ fontWeight: "bold", fontSize: "50px" }}>
      Some Random Content
    </div>
  );
};
export default function TabTest() {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is Content for Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is Content for Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];

  const handleChange = (currentTab) => {
    console.log(currentTab);
  };
  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}
