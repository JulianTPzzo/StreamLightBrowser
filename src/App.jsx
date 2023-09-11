import SiteIcon from "./components/SiteIcon";
import CustomSite from "./components/CustomSite";

function App() {
  return (
    <div>
      <h1 className=" text-xl font-bold">Links</h1>
      <div className="grid grid-cols-2">
        <div>
          <SiteIcon
            img="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Youtube_Music_icon.svg/240px-Youtube_Music_icon.svg.png"
            title="YouTube-Music"
            url="https://music.youtube.com"
          />
          <SiteIcon
            img="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
            title="YouTube"
            url="https://www.youtube.com"
          />
          <SiteIcon
            img="https://www.freepnglogos.com/uploads/purple-twitch-logo-png-18.png"
            title="Twitch"
            url="https://www.twitch.tv"
          />
        </div>

        <div>
          <CustomSite />
        </div>
      </div>

        {/* <hr className="my-4 w-8 center" /> */}

      <h2 className="mb-2 text-xl text-center font-semibold">Donaciones</h2>
      <div className=" flex justify-center items-center gap-6">
        <a href="https://cafecito.app/jtpzzo" rel="noopener" target="_blank" className=" hover:brightness-150">
            <img
            srcset="https://cdn.cafecito.app/imgs/buttons/button_5.png 1x, https://cdn.cafecito.app/imgs/buttons/button_5_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_5_3.75x.png 3.75x"
            src="https://cdn.cafecito.app/imgs/buttons/button_5.png"
            alt="Invitame un café en cafecito.app"
            />
        </a>
        <div className="py-1 px-6 bg-blue-700 rounded-lg flex gap-2 items-center hover:bg-blue-400 cursor-pointer">
            <a href="https://www.paypal.me/jtrabazzo" className="w-8 " rel="noopener" target="_blank">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174861.png" alt=""></img>
                
            </a>
            <span className="font-bold text-white">PayPal</span>
        </div>
      </div>
      
      <div className="my-4 flex items-center">
        <p>App creada por </p>
        <a
          className=" w-32 h-10 m-2 p-2 site-icon flex gap-2 items-center justify-center cursor-pointer rounded-3xl hover:bg-gray-950"
          href="https://juliantp.website"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="h-8"
            src="https://juliantp.website/wp-content/uploads/2023/03/LogoJ64px.png"
            alt="JTP-DEV"
          />
          <span className="font-bold">JTP-DEV</span>
        </a>
        <p>or</p>
        <a
          className=" w-34 h-10 m-2 p-2 site-icon flex gap-2 items-center justify-center cursor-pointer rounded-3xl hover:bg-gray-950"
          href="https://juliantp.website"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="h-8"
            src="https://www.freepnglogos.com/uploads/purple-twitch-logo-png-18.png"
            alt="Twitch"
          />
          <span className="font-bold">PandaTilt17</span>
        </a>
      </div>
            
    </div>
  );
}

export default App;
