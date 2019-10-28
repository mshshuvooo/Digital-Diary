To make this React App, I did some changes in my WP REST API. I added some new code in functions.php file of my WordPress theme to add some new options in my WP REST API. 

Here is the code: 

function prepare_rest( $data, $post, $request ) {
	$_data = $data->data;

	$thambnailId = get_post_thumbnail_id($post->ID);
	$thumbnailSrc = wp_get_attachment_image_src($thambnailId, 'large');
	$cats = get_the_category( $post->ID );
	$postAuthor = get_the_author();
	$postDate = get_the_date();
	


	$_data['dd_post_cats'] = $cats;
	$_data['dd_post_thumb_url'] = $thumbnailSrc[0];
	$_data['dd_post_author'] = $postAuthor;
	$_data['dd_post_date'] = $postDate;


	$data->data = $_data;

	return $data;
}
add_filter('rest_prepare_post', 'prepare_rest', 10, 3);
