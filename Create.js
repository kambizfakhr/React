import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const [author, setAuthor] = useState('kafa');
    return (
        <div className="create">
            <h2>Add a new Blog</h2>
            <form>
                <label>Blog Title:</label>
                <input 
                type="text" 
                required
                value = {title}
                onChange = {(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea 
                required
                value = {body}
                onChange = {(e) => setBody(e.target.value)}
                />
                <label>Blog Author:</label>
               <select
                value = {author}
                onChange = {(e) => setAuthor(e.target.value)}
               >
                   <option value="kambiz fakhr">kambiz fakhr</option>
                   <option value="kafa">kafa</option>
               </select>
               <button>Insert Blog</button>
               <p>{ author }</p>
            </form>
        </div>
      );
}
 
export default Create;