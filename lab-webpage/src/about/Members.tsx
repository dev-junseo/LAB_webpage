import Submenu from "../components/layout/Submenu";
import MembersProfile from "../components/MembersProfile";

function Members() {
  const MemebersInfo = [
    {
      name: "Kim Hyeon Ah(김현아)",
      profileImg: "/images/member-profile.png",
      edu: "Combined B.S./M.S.",
      major: "Department of Materials System",
      email: "~~~@pukyong.ac.kr",
    },
    {
      name: "Oh Su Bin(오수빈)",
      profileImg: "/images/member-profile.png",
      edu: "Combined B.S./M.S.",
      major: "Department of Materials System",
      email: "~~~@pukyong.ac.kr",
    },
    {
      name: "Oh Ji Eun(오지은)",
      profileImg: "/images/member-profile.png",
      edu: "Combined B.S./M.S.",
      major: "Department of Materials System",
      email: "~~~@pukyong.ac.kr",
    },
    {
      name: "Ha Jun Seo(하준서)",
      profileImg: "/images/member-profile.png",
      edu: "Combined B.S./M.S.",
      major: "Department of Materials System",
      email: "202130292@pukyong.ac.kr",
    },
    {
      name: "Go Eun Su(고은수)",
      profileImg: "/images/member-profile.png",
      edu: "Undergraduate",
      major: "Department of Materials System",
      email: "~~~@pukyong.ac.kr",
    },
    {
      name: "Yu Min Sang(유민상)",
      profileImg: "/images/member-profile.png",
      edu: "Undergraduate",
      major: "Department of Materials System",
      email: "~~~@pukyong.ac.kr",
    },
  ];

  return (
    <div>
      <div className="mt-12">
        <div className="flex justify-center">
          <div>
            <div className="text-center lg:mb-28 mb-16 flex justify-center items-center flex-col">
              <span className="text-title text-[60px] mb-28 animate-[gotoDown_0.7s_ease-in-out_both]">
                MEMBERS
              </span>
              <div className="flex items-center justify-center grid lg:grid-cols-2 grid-cols-1">
                {MemebersInfo.map((info) => {
                  return <MembersProfile info={info} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Members;
