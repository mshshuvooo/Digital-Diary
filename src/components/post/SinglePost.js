import React, { Component } from 'react'
import axios from 'axios'
import renderHTML from 'react-render-html'
import Loader from '../../loading.gif'

class SinglePost extends Component {
  
    state = {
        post: {},
        error: '',
        loading: true
    };

    

    componentDidMount(){
            this.setState({ loading: true }, () => {
                axios.get( `https://shahadatshuvo.com/wp-json/wp/v2/posts/${this.props.match.params.id}` ).then( res => {
                    this.setState({ post: res.data, loading: false }) 
                } ).catch( error => { this.setState({ loading: false, error: error.response.data.message }) } )
        } )
        
        
    };

   
   
   

    render() {
        const { post, loading, error } = this.state;

        console.log(post);
        
        
        return (
            <div>
                { error && <div className="alert alert-danger">{}</div> }
                { loading && <div className="loader">
                    <img src={Loader} alt="Loading"/>
                </div>  }
                { Object.keys( post ).length ? (
                    <div className="posts-wrapper">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-12">
                                        
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
                                                { renderHTML( post.content.rendered ) }
                                            </div>
                                            
                                            
                                        
                                        </div>
                                   
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                ): '' }
            </div>
        )
    }
}

export default SinglePost;
