<?php
/**
 * This is the homepage template file.
 *
 * @package  AaronRT Child Theme
 * @since    1.0.0
 */



/** Force full width layout */
add_filter( 'genesis_pre_get_option_site_layout', '__genesis_return_full_width_content' );


/*
	TODO: Need to refacot the js in order to show the post title for each post..
	Also need to refactor the stylings.. A lot
*/

function create_dynamic_windows(){ // creates the dynamic windows on the home page 
	
	$the_query = new WP_Query( 'showposts=3' );  // query the first three posts
	 
	$output =  " <div class='window-wrapper'>"; // open the initial wrapper 
	
	$output .= " <div class='wide-windows'>"; // open the first window on the left side of the wrapper
	


	 while ($the_query  -> have_posts()) : $the_query  -> the_post(); // while loop to iterate through the first post in the blog
		
		$url = wp_get_attachment_url( get_post_thumbnail_id($the_post->ID) ); // get the Permalink associated with the post
	
		$output .= "<a href='".get_permalink( $the_post->ID)."' >"; // open an anchor tag to make the first window into a link
	
		$output .= "<div class='first-level-container'>"; // structure to the link  

		$output .= "<div class='image  filter-trigger' style='background-image:url(".$url. ");'>"; // background image
	
		$output .= "<div class='a-content-mask'>"; // mask layer that overlays the background image 
	
		$output .= "<h1>".get_the_title($the_post->ID)."</h1>"; // grab the title and place in an level one header tag

		$output .= "<li class='cta'>Read More</li>"; 
	
		$output .= "</div>"; // close mask
	 
		$output .= "</div>"; // close background image 
	 
		$output .= "</div>"; // close the container
	
		$output .= "</a>"; // close the ancor tag 
	 
	 endwhile;// end the while loop 
	
		$output .= "</div>"; // close the widw window 

		$output .= "<div class='small-windows'>"; // start the small windows to the right 

	$args = array( // array to offset what the next while loop grabs 
        'offset' => 1
    );

	$the_query = new WP_Query( $args ); // query the database for more posts 

	while ($the_query  -> have_posts()) : $the_query  -> the_post(); // if the posts exist then run this while loop

		$url = wp_get_attachment_url( get_post_thumbnail_id($the_post->ID) ); // set the url to the permalink associated with the post 

		$output .= "<a href='".get_permalink( $page->ID)."'>"; // Open an anchor tag to turn the window into a link

		$output .= "<div class='a-half '>"; // create the structure for the window 

		$output .= "<div class='image  filter-trigger' style='background-image:url(".$url. ");'>"; // background image for each container
	
		$output .= "<div class='a-content-mask'>"; // mask for each container 

		$output .= "<h1>".get_the_title($the_post->ID)."</h1>"; // title for each container 

		$output .= "<li class='cta'>Read More</li>"; // dumby button CTA 
			
		$output .= "</div>"; // close the mask
		 
		$output .= "</div>"; // close the background image 
	
		$output .= "</div>"; // close the container 
	
		$output .= "</a>"; // close the link 
	endwhile;

	$output .=  "</div>"; // close the small window container 

	$output .=	"</div>"; // close the entire structure 


	/** Force full width layout */
	echo $output; // force the server to output the markup 
}

function about_callout(){ // print out a message 

	$output = "<div class='about-callout-wrapper'>";  // define the wrapper element

	$output .= "<div class='contents'>"; // this creates the container in which all of the 

	$output .= "<div class='circle'></div>"; // this is an image with a border radius 

	//short message about me - TODO :: should come from the first few words on the about me page 
	$output .= "<p>My name is Aaron Elliott, and I’m a WordPress developer living in Dayton Ohio. I have been working on building skills in website development for almost three years now.</p>";

	$output .= "<a class='cta'>Read More!</a>"; // Read more CTA - TODO:: Should link to the about me page 

	$output .= "</div>"; // end the contents 

	$output .= "</div>"; // end the wrapper 

	echo $output; // force the server to output the results 

	/** Force full width layout */

}


function short_ready_callout(){ // 

	$output = "<div class='callout-wrapper'>";

	$output .= "<div class='contents'>";

	$output .= "<h2>Need someone on your next project?</h2>";

	$output .= "<p>Why not me?</p>";

	$output .= "<a class='cta'>Hire me!</a>";

	$output .= "</div>";

	$output .= "</div>";

	echo $output;

	/** Force full width layout */

}

remove_action( 'genesis_entry_header', 'genesis_do_post_title', 10); 

add_filter( 'genesis_after_header', 'about_callout', 15 );
add_filter( 'genesis_after_header', 'create_dynamic_windows', 20 );
add_filter( 'genesis_after_header', 'short_ready_callout', 30 );


genesis();
