
import { BlogClientID } from './blogClientID';

const SingleBlogDetail = ({ params }: { params: { id: string } }) => {
  // Yahan aap 'params.id' ka use karke backend se data fetch karenge
  // Abhi ke liye hum dummy data use kar rahe hain
  
  return (
   <BlogClientID/>
  );
};

export default SingleBlogDetail;