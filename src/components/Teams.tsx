import React from "react";
import Title from "./Title";
import assets, { teamData } from "../assets";

type TeamsProps = {
  theme: "light" | "dark";
};

const Teams: React.FC<TeamsProps> = ({ theme }) => {
  return (
    <div className="relative isolate overflow-hidden">
      {/* BACKGROUND PINDAH KE SINI */}
      <img
        src={theme === "dark" ? assets.background : assets.backgroundlight}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-center -z-10 opacity-30 blur-[10px]"
      />
      <section
        id="team"
        className="flex flex-col items-center gap-10 px-6 sm:px-12 lg:px-24 py-24 text-primary dark:text-text-invert"
      >
        <Title
          title="Struktur Tim KKN 31"
          desc="Tim KKN 31 Universitas Merdeka Malang yang berkolaborasi dalam berbagai divisi untuk menjalankan program pengabdian di Desa Pandanlandung."
        />

        {/* ===== LEADER ===== */}
        <div className="w-full flex justify-center ">
          {teamData.slice(0, 1).map((team, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 p-6 rounded-2xl
                        bg-surface dark:bg-primary
                        border border-secondary/40 dark:border-secondary/40
                        shadow-xl
                        transition-all duration-300
                        hover:scale-[1.03] hover:shadow-2xl
                        max-w-sm w-full"
            >
              <img
                src={team.image}
                alt={team.name}
                className="w-24 h-24 rounded-full object-cover"
              />

              <div className="text-center">
                <h3 className="font-bold text-base">{team.name}</h3>
                <p className="text-sm font-medium opacity-80 mt-1">
                  {team.division}
                </p>
                <a
                  href={`https://instagram.com/${team.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 mt-3
                            text-black dark:text-text-invert
                            opacity-80 hover:opacity-100
                            text-xs font-light transition"
                >
                  <img
                    src={assets.instagram_icon}
                    alt="Instagram"
                    className="w-4 h-4"
                  />
                  @{team.instagram}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ===== GRID MEMBERS ===== */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-6xl">
          {teamData.slice(1).map((team, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 p-6 rounded-2xl
                        bg-surface dark:bg-primary
                        border border-secondary/40 dark:border-secondary/40
                        shadow-lg
                        transition-all duration-300
                        hover:scale-[1.03] hover:shadow-2xl"
            >
              <img
                src={team.image}
                alt={team.name}
                className="w-20 h-20 rounded-full object-cover"
              />

              <div className="text-center">
                <h3 className="font-bold text-sm">{team.name}</h3>
                <p className="text-xs font-medium opacity-80 mt-1">
                  {team.division}
                </p>
                <a
                  href={`https://instagram.com/${team.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 mt-3
                            text-black dark:text-text-invert
                            opacity-80 hover:opacity-100
                            text-xs font-light transition"
                >
                  <img
                    src={assets.instagram_icon}
                    alt="Instagram"
                    className="w-4 h-4"
                  />
                  @{team.instagram}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Teams;
