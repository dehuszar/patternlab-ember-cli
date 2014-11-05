import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

    // ATOMS
    this.resource("atoms", function() {

        // Global Atoms
        this.resource("atoms.global", function() {
            this.route("colors");
            this.route("fonts");
            this.route("animations");
            this.route("visibility");
        });

        // Text Atoms
        this.resource("atoms.text", function() {
            this.route("headings");
            this.route("paragraph");
            this.route("blockquote");
            this.route("inline-elements");
            this.route("time");
            this.route("preformatted-text");
            this.route("hr");
        });

        // List Atoms
        this.resource("atoms.lists", function() {
            this.route("unordered");
            this.route("ordered");
            this.route("definition");
        });

        // Image Atoms
        this.resource("atoms.images", function() {
            this.route("logo");
            this.route("landscape4x3");
            this.route("landscape16x9");
            this.route("square");
            this.route("avatar");
            this.route("icons");
            this.route("loading-icon");
            this.route("favicon");
        });
        
        // Form Atoms
        this.resource("atoms.forms", function() {
            this.route("text-fields");
            this.route("select-menu");
            this.route("checkbox");
            this.route("radio-buttons");
            this.route("html5-inputs");
        });

        // Button Atoms
        this.route("buttons");

        // Table Atoms
        this.route("tables");
    });

    // MOLECULES
    this.resource("molecules", function() {

        // Text Molecules
        this.resource("molecules.text", function() {
            this.route("byline");
            this.route("address");
            this.route("heading-group");
            this.route("blockquote-with-citation");
            this.route("intro-text");
        });

        // Layout Molecules
        this.resource("molecules.layouts", function() {
            this.route("one-up");
            this.route("two-up");
            this.route("three-up");
            this.route("four-up");
        });

        // Block Molecules
        this.resource("molecules.blocks", function() {
            this.route("media");
            this.route("headline-byline");
            this.route("hero");
            this.route("thumb-headline");
            this.route("headline");
            this.route("inset");
        });

        // Media Molecules
        this.resource("molecules.media", function() {
            this.route("figure-with-caption");
        });

        // Form Molecules
        this.resource("molecules.forms", function() {
            this.route("search");
            this.route("comment-form");
            this.route("newsletter");
        });

        // Navigation Molecules
        this.resource("molecules.navigation", function() {
            this.route("primary");
            this.route("footer");
            this.route("breadcrumbs");
            this.route("pagination");
            this.route("tabs");
        });

        // Components Molecules
        this.resource("molecules.components", function() {
            this.route("social-share");
            this.route("accordion");
            this.route("single-comment");
        });

        // Messaging Molecules
        this.resource("molecules.messaging", function() {
            this.route("alert");
        });
    });

    // ORGANISMS
    this.resource("organisms", function() {
        // Global Organisms
        this.resource("organisms.global", function() {
            this.route("header");
            this.route("footer");
        });

        // Article Organisms
        this.resource("organisms.article", function() {
            this.route("body");
        });

        // Comment Organisms
        this.resource("organisms.comments", function() {
            this.route("thread");
        });

        // Section Organisms
        this.resource("organisms.sections", function() {
            this.route("latest-posts"); 
            this.route("recent-tweets"); 
            this.route("related-posts"); 
        });
    });

    // TEMPLATES
    this.resource("templates", function() {
        this.route("homepage");
        this.route("blog");
        this.route("article");
    });

    // PAGES
    this.resource("pages", function() {
        this.route("homepage");
        this.route("homepage-emergency");
        this.route("blog");
        this.route("article");
    });
});

export default Router;
