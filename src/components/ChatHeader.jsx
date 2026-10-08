export default function ChatHeader({ channel, isTyping }) {
  return (
    <header className="chat-header">
      <h1># {channel.name}</h1>
      <ChatHeader channel={channel} isTyping={isTyping} />
    </header>
  );
}
