import Bill from "./Bill.js";
import Service from "./Service.js";
import FriendService from "./FriendService.js";
import Result from "./Result.js";
import Reset from "./Reset.js";
import { useState } from "react";

function App() {
  const [friendService, setFriendService] = useState(0);
  const [service, setService] = useState(0);
  const [bill, setBill] = useState(0);

  const tip = bill * ((service + friendService) / 2 / 100);

  function handleReset() {
    setBill(0);
    setService("");
    setFriendService("");
  }

  return (
    <div className="container">
      <Bill bill={bill} setBill={setBill} />
      <Service service={service} setService={setService} />
      <FriendService
        friendService={friendService}
        setFriendService={setFriendService}
      />

      {bill > 0 && (
        <>
          <Result bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

export default App;
