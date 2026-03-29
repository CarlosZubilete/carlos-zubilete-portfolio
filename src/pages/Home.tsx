import Profile from "../components/profile/Profile";
import Skills from "../components/skills/Skills";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid md:grid-cols-12 gap-8">
        {/* LEFT */}
        <div className="md:col-span-5">
          <Profile />
        </div>

        {/* RIGHT */}
        <div className="md:col-span-7">
          <Skills />
        </div>
      </div>
    </div>
  );
}
