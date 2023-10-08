import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import Dashborad from "./pages/Dashborad";
import SearchPage from "./pages/SearchPage";
import SearchPage2 from "./pages/SearchPage2";
import ResearchNode from "./pages/ResearchNode";
import GraphView from "./pages/GraphView";
import CommunitiyForum from "./pages/CommunitiyForum";
import Codespace from "./pages/Codespace";
import ProfilePage from "./pages/ProfilePage";
import NewProject from "./pages/NewProject";
import ProjectCreation from "./pages/ProjectCreation";
import Support from "./pages/Support";
import Settings from "./pages/Settings";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/dashborad":
        title = "";
        metaDescription = "";
        break;
      case "/search-page":
        title = "";
        metaDescription = "";
        break;
      case "/search-page-2":
        title = "";
        metaDescription = "";
        break;
      case "/research-node":
        title = "";
        metaDescription = "";
        break;
      case "/graph-view":
        title = "";
        metaDescription = "";
        break;
      case "/communitiy-forum":
        title = "";
        metaDescription = "";
        break;
      case "/codespace":
        title = "";
        metaDescription = "";
        break;
      case "/profile-page":
        title = "";
        metaDescription = "";
        break;
      case "/new-project":
        title = "";
        metaDescription = "";
        break;
      case "/project-creation":
        title = "";
        metaDescription = "";
        break;
      case "/support":
        title = "";
        metaDescription = "";
        break;
      case "/settings":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<SignInPage />} />
      <Route path="/dashborad" element={<Dashborad />} />
      <Route path="/search-page" element={<SearchPage />} />
      <Route path="/search-page-2" element={<SearchPage2 />} />
      <Route path="/research-node" element={<ResearchNode />} />
      <Route path="/graph-view" element={<GraphView />} />
      <Route path="/communitiy-forum" element={<CommunitiyForum />} />
      <Route path="/codespace" element={<Codespace />} />
      <Route path="/profile-page" element={<ProfilePage />} />
      <Route path="/new-project" element={<NewProject />} />
      <Route path="/project-creation" element={<ProjectCreation />} />
      <Route path="/support" element={<Support />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}
export default App;
