import Layout from '../components/Layout';
import ChatWindow from '../components/ChatWindow';

export default function HomePage() {
  return (
    <Layout>
      {/* This page is just the full-screen chat window */}
      <ChatWindow />
    </Layout>
  );
}