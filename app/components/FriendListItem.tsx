interface IFriendListItemProps {
  bgImage: string;
  isInvited: boolean;
  friendName: string;
  friendJob: string;
}

const FriendListItem = (props: IFriendListItemProps) => {
  const { bgImage, isInvited, friendName, friendJob } = props;

  return (
    <>
      <div className="bg-white p-3 flex gap-2 items-center justify-between border rounded-xl border-black">
        {/* Avatar */}
        <div
          className={`bg-${bgImage} bg-cover bg-center size-12 bg-orange-600 rounded-full`}
        />
        <div className="flex flex-col w-friends">
          <span className="text-lg font-black">{friendName}</span>
          <span className="text-xs text-gray-600">{friendJob}</span>
        </div>
        <div>
          {isInvited ? (
            <button className="text-xs py-1 px-2 font-black bg-black text-white rounded-lg border border-black border-b-2">
              Invited
            </button>
          ) : (
            <button className="text-xs py-1 px-2 font-black bg-yellow-400 rounded-lg border border-black border-b-2">
              Invite
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default FriendListItem;
