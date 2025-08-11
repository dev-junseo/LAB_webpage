import MembersProfile from "../components/MembersProfile";

function Members() {
  const MemebersInfo = [
    {
      name: "Kim Hyeon A(김현아)",
      profileImg: "/images/KHA_profile.jpg",
      edu: "Combined B.S./M.S.",
      major: "Department of Materials System Engineering",
      email: "vikivikilove@naver.com",
    },
    {
      name: "Oh Ji Eun(오지은)",
      profileImg: "/images/OJE_profile.jpg",
      edu: "Combined B.S./M.S.",
      major: "Department of Materials System Engineering",
      email: "oje021025@naver.com",
    },
    {
      name: "Ha Jun Seo(하준서)",
      profileImg: "/images/HJS_profile.jpg",
      edu: "Combined B.S./M.S.",
      major: "Department of Materials System Engineering",
      email: "hjs081435@pukyong.ac.kr",
    },
    {
      name: "Go Eun Su(고은수)",
      profileImg: "/images/GES_profile.jpg",
      edu: "Undergraduate",
      major: "Department of Materials System Engineering",
      email: "esko8119@naver.com",
    },
    {
      name: "Yu Min Sang(유민상)",
      profileImg: "/images/UMS_profile.png",
      edu: "Undergraduate",
      major: "Department of Materials System Engineering",
      email: "poi4064@naver.com",
    },
    {
      name: "Sung Min Su(성민수)",
      profileImg: "/images/SMS_profile.jpg",
      edu: "Undergraduate",
      major: "Department of Metallurgical Engineering",
      email: "a71108@naver.com",
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
