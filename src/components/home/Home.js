import React, { Component } from 'react'
import axios from 'axios'
import Pagination from "react-js-pagination"
import Loader from '../../loading.gif'
import Posts from '../post/Posts'

class Home extends Component {
    
    state = {
        posts: [],
        error: '',
        loading: true,
        setPosts: [],
        totatPosts: 0,
        perPage: 5,
        activePage: this.props.match.params.activepage || 1,
    }

    fetchData = () => {
        this.setState({ loading: true}, () => {
            axios.get( `https://shahadatshuvo.com/wp-json/wp/v2/posts?per_page=${this.state.perPage}&page=${this.state.activePage}` ).then( res => {
                this.setState({ posts: res.data, loading: false, totatPosts: res.headers["x-wp-total"]}) 
            } ).catch( error => { this.setState({ loading: false, error: error.response.data.message }) } )
        } );
    }


    componentDidMount() {
        this.fetchData();
    }
    

    componentDidUpdate(prevProps) {
        if ( this.props.match.params.activepage !== prevProps.match.params.activepage ) {
          this.fetchData();
        }
    }

    handlePageChange = pageNumber => {
        this.setState({ activePage: pageNumber });
        this.props.history.push(`/page/${pageNumber}`);
        window.scrollTo(0, 0);
    };

  
   
   

    render() {
        const { posts, loading, error, totatPosts, activePage, perPage } = this.state;
        
        
        
        
        return (
            <div>
                { error && <div className="alert alert-danger">{error}</div> }
                { loading && <div className="loader">
                    <img src={Loader} alt="Loading"/>
                </div>  }
                { posts.length ? (
                    <div className="posts-wrapper">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-10">
                                    <Posts allposts={posts} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 mt-5 mb-5">
                                    <Pagination
                                        activePage={parseInt(activePage)}
                                        itemsCountPerPage={perPage}
                                        totalItemsCount={totatPosts}
                                        pageRangeDisplayed={8}
                                        innerClass="pagination justify-content-center"
                                        itemClass="page-item"
                                        linkClass="page-link"
                                        onChange={this.handlePageChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ): '' }
            </div>
        )
    }
}

export default Home;
