import { useState } from "react";
import illustrationTab1 from "../assets/illustration-features-tab-1.svg";
import illustrationTab2 from "../assets/illustration-features-tab-2.svg";
import illustrationTab3 from "../assets/illustration-features-tab-3.svg";
import Panel from "./Panel";
const Features = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleActiveTab = (tabNum) => {
    setActiveTab(tabNum);
  };
  return (
    <>
      <section id="features">
        {/* Features Heading */}
        <div className="container mx-auto mt-16 px-6 md:mx-0">
          <h2 className="mb-6 text-4xl font-semibold text-center">Features</h2>
          <p className="max-w-md mx-auto text-center text-grayishBlue">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
      </section>
      {/* Features Tabs */}
      <section id="tabs">
        {/* Tabs/Panels Container */}
        <div className="container relative mx-auto my-6 mb-32 mt-12 px-6">
          <div className="bg-tabs"></div>
          {/* tabs Flex Contaienr */}
          <div className="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row">
            {/* Tab 1 */}
            <div
              className="flex justify-center text-center text-gray-600 border-b md:border-b-0 hover:text-softRed tab md:w-1/3"
              onClick={() => {
                handleActiveTab(1);
              }}
            >
              <div
                className={`cursor-pointer py-5 ${
                  activeTab == 1 && "is-active"
                }`}
              >
                Simple Bookmarking
              </div>
            </div>
            {/* Tab 2 */}

            <div
              onClick={() => {
                handleActiveTab(2);
              }}
              className="flex justify-center text-center text-gray-600 border-b md:border-b-0 hover:text-softRed tab md:w-1/3"
            >
              <div
                className={`cursor-pointer py-5 ${
                  activeTab == 2 && "is-active"
                }`}
              >
                Speedy Searching{" "}
              </div>
            </div>
            {/* Tab 3 */}
            <div
              onClick={() => {
                handleActiveTab(3);
              }}
              className="flex justify-center text-center text-gray-600 border-b md:border-b-0 hover:text-softRed tab md:w-1/3"
            >
              <div
                className={`cursor-pointer py-5 ${
                  activeTab == 3 && "is-active"
                }`}
              >
                Easy Sharing{" "}
              </div>
            </div>
          </div>

          {/* Tab Panels */}
          <section id="panels" className="container mx-auto">
            {/* Panel 1 */}
            {activeTab == 1 && (
              <Panel
                header={"Bookmark in one click"}
                paragraph="Organize your bookmarks however you like. Our simple
                drag-and-drop interface gives you complete control over how you
                manage your favourite sites."
                img={illustrationTab1}
              />
            )}
            {activeTab == 2 && (
              <Panel
                header={"Intelligent search"}
                paragraph="Our powerful search feature will help you find saved sites in no
                time at all. No need to trawl through all of your bookmarks."
                img={illustrationTab2}
              />
            )}
            {activeTab == 3 && (
              <Panel
                header={"Share your bookmarks"}
                paragraph="Easily share your bookmarks and collections with others. Create
                a shareable a link that you can send at the click of a button."
                img={illustrationTab3}
              />
            )}
          </section>
        </div>
      </section>
    </>
  );
};

export default Features;
