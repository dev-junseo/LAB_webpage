import Submenu from "../components/layout/Submenu";

function Members() {
  return (
    <div>
      <Submenu currentMenu="MEMBERS" />
      <div className="mx-[10%] mt-12">
        <div className="flex justify-center">
          <div>
            <div className="text-center text-[60px] lg:mb-28 mb-16 text-title animate-[gotoDown_0.7s_ease-in-out_both]">
              <span>MEMBERS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Members;