class Api::V1::DashboardController < ApplicationController

    def index
        load_recent_heard
        load_recommendations
    end

    private 

    def load_recent_heard
        #divise is able to obtain the user from the browser cookies
        #too show in the 4 last albuns hearded
        @recent_albums = current_user.recently_heards.order('created_at DESC').limit(8).map(&:album).uniq #in case of heard more times the same album, they will return only one.
    end

    def load_recommendations
        #here this method will show similar albums according to they category
        #but if the user has just logging, they will show in last 12 albums hearded
        heard_categories = @recent_albums.map(&:category)
        if heard_categories.present?
            @recommended_albums = Album.joins(:category, :songs).where(category: heard_categories).order('songs.played_count')
                                                                .select('distinct albums.*').limit(12)
        else
            @recommended_albums = Album.all.sample(12)
        end

    end

end
