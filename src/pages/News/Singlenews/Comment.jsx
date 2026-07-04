import { Link } from "react-router-dom";

const Comment = ({comment , error , nameInput , emailInput , message , replyTo , setNameInput , setEmailInput , setMessage , handleSubmit , setReplyTo}) => {
    return (
        <>
             <div className="comments-list-wrap">
                <h3 className="comment-count-title"> {comment.length > 0 && comment.length} Comments</h3>
                <div className="comment-list">

                    {comment.map((item) => (
                        <>
                            <div className="single-comment-body" key={item.id}>
                                <div className="comment-user-avater">
                                    <img src="/image/avaters/avatar1.png" alt="" />
                                </div>
                                <div className="comment-text-body">
                                    <h4>{item.name} <span className="comment-date">{item.date}</span> <Link to="#" onClick={(e) =>{e.preventDefault(); setReplyTo(item.id)}}>reply</Link></h4>
                                    <p>{item.message}</p>
                                </div>

                            </div>
                            {item.replies.map((reply) => (

                                <div className="single-comment-body child" key={reply.id}>
                                    <div className="comment-user-avater">
                                        <img src="/image/avaters/avatar3.png" alt="" />
                                    </div>
                                    <div className="comment-text-body">
                                        <h4> <span className="comment-date">{reply.name}</span> </h4>
                                        <p>{reply.message}</p>
                                    </div>
                                </div>
                            ))}
                        </>
                    ))}


                </div>
            </div>
            <div className="comment-template">
                <h4>{replyTo ? "Reply Comment" : "Leave a comment"}</h4>
                <p>If you have a comment dont feel hesitate to send us your opinion.</p>
                <form onSubmit={handleSubmit}>
                    <p className="d-flex">
                        <div className="input-wrapper flex-direction-column">
                            <input type="text" placeholder="Your Name" value={nameInput} onChange={(e) => setNameInput(e.target.value)} style={{ width: "360px" }} />
                            {error.name && (<h6 className="text-danger">{error.name}</h6>)}
                        </div>
                        <div className="input-wrapper flex-direction-column">
                            <input type="email" placeholder="Your Email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} style={{ width: "360px" }} />
                            {error.email && <h6 className="text-danger">{error.email}</h6>}
                        </div>
                    </p>




                    <div className="wrapper">
                        <p><textarea name="comment" id="comment" cols="30" rows="10" placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea></p>
                        {error.message && <h6 className="text-danger">{error.message}</h6>}
                    </div>
                    <p><input type="submit" value={replyTo ? "Send Reply" : "Submit"} /></p>

                </form>
            </div>
        </>
    );
}

export default Comment;