import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import renderHTML from 'react-render-html'

export default class Posts extends Component {
    render() {
        return (
            <React.Fragment>
                { this.props.allposts.map( post => (
                                            
                    <div key={ post.id } className="single-post-item">
                        <div className="post-thumbnail">
                            <img src={post.dd_post_thumb_url} alt=""/>
                        </div>
                        <div className="post-meta">
                            <span><i className="fa fa-user"></i>{ post.dd_post_author }</span>
                            <span><i className="fa fa-clock-o"></i>{ post.dd_post_date }</span>

                            { post.dd_post_cats.length? (
                                <span><i className="fa fa-tag"></i>{ post.dd_post_cats[0].name }</span>
                                
                            ) :'' }
                        </div>
                        <h2 className="post-title" >{ post.title.rendered }</h2>
                        <div className="post-content">
                            { renderHTML( post.excerpt.rendered ) }
                        </div>
                        <Link to={ `/post/${post.id}` } className="boxed-btn">Read More</Link>
                    </div>
                    
                ) ) }
            </React.Fragment>
        )
    }
}
