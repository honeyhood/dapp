import { useEffect } from 'react';
import { signCreatePostTypedData } from '../../../helpers/create-testnet-post';

const Profile = () => {
  useEffect(() => {
    signCreatePostTypedData();
  }, []);
  let nftArray;
  let myNFT;

  async function follow() {}

  return (
    <div className="h-screen w-screen">
      <img
        className="w-full h-[310px] object-cover"
        src={
          'https://ipfs.moralis.io:2053/ipfs/QmNgA9MNWFfRaoKzBt21VghQopnKXBgVxzyGvv5qjsV4Vw/media/2'
        }
        alt="cover"
      />
      <div className="bg-black h-full w-full flex">
        <div className="w-[350px] h-full flex flex-col items-center">
          <img
            className="w-[15vw] h-[15vw] rounded-full border-4 border-white relative bottom-20"
            src={
              'https://ipfs.moralis.io:2053/ipfs/QmNgA9MNWFfRaoKzBt21VghQopnKXBgVxzyGvv5qjsV4Vw/media/1'
            }
            alt="profileImg"
          />
          <div className="w-[60%] relative bottom-15 bg-black">
            <div className="w-[60%] flex justify-start font-bold text-2xl text-white">
              Web3 Mage
            </div>
            <div className="w-[60%] flex justify-start text-lg text-white">
              mage.lens
            </div>
            <div className="flex justify-start text-sm text-white mt-5">
              Buidling web3 solutions with magical mage abilities 🧙‍♂️
            </div>
            <div className="w-[80%] text-base font-medium flex justify-between text-white mt-5">
              <div>Followers</div>
              <div>472</div>
            </div>
            <div className="w-[80%] text-base font-medium flex justify-between text-white mt-5">
              <div>Following</div>
              <div>34</div>
            </div>
          </div>
        </div>
        <div className="p-5 w-[calc(100vw - 350px)]">
          <div class="tabs">
            <a class="tab tab-bordered">Tab 1</a>
            <a class="tab tab-bordered tab-active">Tab 2</a>
            <a class="tab tab-bordered">Tab 3</a>
          </div>
        </div>

        {/* <div className="p-5 w-[calc(100vw - 350px)]">
          <Tabs defaultActiveKey="1" centered>
            <TabPane tab="I'm Following" key="1">
              <div className="flex justify-center flex-wrap gap-5">
                {nftArray?.map((e) => {
                  return (
                    <iframe
                      className="border-none h-[300px] mt-[10px]"
                      src={e}
                    ></iframe>
                  );
                })}
              </div>
            </TabPane>
            <TabPane tab="Follow Me" key="2" className="text-white">
              <div className="flex justify-between py-5 px-[150px] text-white">
                <div>
                  <div className="my-5 text-3xl font-bold">Hey There 👋🏼</div>
                  <Button onClick={follow} type="primary">
                    Follow Me
                  </Button>
                </div>
                {myNFT && (
                  <iframe
                    className="border-none h-[250px] w-[420px]"
                    src={myNFT}
                  ></iframe>
                )}
              </div>
            </TabPane>
            <TabPane tab="Social Posts" key="3" disabled={true} />
          </Tabs>
        </div> */}
      </div>
    </div>
  );
};

export default Profile;
