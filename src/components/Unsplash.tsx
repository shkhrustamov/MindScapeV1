import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native';

type Image = {
  id: string;
  slug: 'a-man-standing-in-front-of-a-desert-landscape-Xm1wdkNUwrY';
  created_at: '2023-05-02T06:42:00Z';
  updated_at: '2023-12-17T13:40:55Z';
  promoted_at: null;
  width: 8688;
  height: 5792;
  color: '#f3d9c0';
  blur_hash: 'L,LD0;NaRkxZ~pf6aeWVtljYjZWC';
  description: string;
  alt_description: 'a man standing in front of a desert landscape';
  breadcrumbs: [];
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
  links: {
    self: 'https://api.unsplash.com/photos/a-man-standing-in-front-of-a-desert-landscape-Xm1wdkNUwrY';
    html: 'https://unsplash.com/photos/a-man-standing-in-front-of-a-desert-landscape-Xm1wdkNUwrY';
    download: 'https://unsplash.com/photos/Xm1wdkNUwrY/download?ixid=M3w1Mzc2ODV8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwMjg0Mjg5NHw';
    download_location: 'https://api.unsplash.com/photos/Xm1wdkNUwrY/download?ixid=M3w1Mzc2ODV8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwMjg0Mjg5NHw';
  };
  likes: string;
  liked_by_user: string;
  current_user_collections: [];
  sponsorship: {
    impression_urls: [
      'https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=11515517&rnd=[timestamp]&redir=https://secure.insightexpressai.com/adserver/1pixel.gif',
      'https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=11515720&rnd=[timestamp]&redir=https://secure.insightexpressai.com/adserver/1pixel.gif',
    ];
    tagline: 'Made to Change';
    tagline_url: 'https://www.neom.com/en-us?utm_source=unsplash&utm_medium=referral';
    sponsor: {
      id: 'mYizSrdJkkU';
      updated_at: '2023-12-17T14:06:12Z';
      username: 'neom';
      name: 'NEOM';
      first_name: 'NEOM';
      last_name: null;
      twitter_username: 'neom';
      portfolio_url: 'http://www.neom.com';
      bio: 'Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.';
      location: 'NEOM, Saudi Arabia';
      links: {
        self: 'https://api.unsplash.com/users/neom';
        html: 'https://unsplash.com/@neom';
        photos: 'https://api.unsplash.com/users/neom/photos';
        likes: 'https://api.unsplash.com/users/neom/likes';
        portfolio: 'https://api.unsplash.com/users/neom/portfolio';
        following: 'https://api.unsplash.com/users/neom/following';
        followers: 'https://api.unsplash.com/users/neom/followers';
      };
      profile_image: {
        small: 'https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32';
        medium: 'https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64';
        large: 'https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128';
      };
      instagram_username: 'discoverneom';
      total_collections: 7;
      total_likes: 0;
      total_photos: 202;
      total_promoted_photos: 72;
      accepted_tos: true;
      for_hire: false;
      social: {
        instagram_username: 'discoverneom';
        portfolio_url: 'http://www.neom.com';
        twitter_username: 'neom';
        paypal_email: null;
      };
    };
  };
  topic_submissions: {};
  user: {
    id: 'mYizSrdJkkU';
    updated_at: '2023-12-17T14:06:12Z';
    username: 'neom';
    name: 'NEOM';
    first_name: 'NEOM';
    last_name: null;
    twitter_username: 'neom';
    portfolio_url: 'http://www.neom.com';
    bio: 'Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.';
    location: 'NEOM, Saudi Arabia';
    links: {
      self: 'https://api.unsplash.com/users/neom';
      html: 'https://unsplash.com/@neom';
      photos: 'https://api.unsplash.com/users/neom/photos';
      likes: 'https://api.unsplash.com/users/neom/likes';
      portfolio: 'https://api.unsplash.com/users/neom/portfolio';
      following: 'https://api.unsplash.com/users/neom/following';
      followers: 'https://api.unsplash.com/users/neom/followers';
    };
    profile_image: {
      small: 'https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32';
      medium: 'https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64';
      large: 'https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128';
    };
    instagram_username: 'discoverneom';
    total_collections: 7;
    total_likes: 0;
    total_photos: 202;
    total_promoted_photos: 72;
    accepted_tos: true;
    for_hire: false;
    social: {
      instagram_username: 'discoverneom';
      portfolio_url: 'http://www.neom.com';
      twitter_username: 'neom';
      paypal_email: null;
    };
  };
};

const Unsplash = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Image[]>([]);

  const getPhotos = async () => {
    try {
      const response = await fetch(
        'https://api.unsplash.com/photos/?client_id=L-sV86yyMukCONwrq0oi4TkdZRqyL2ueUF-2I7eE2uE',
      );
      const json = await response.json();
      console.log(json);
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          horizontal
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <>
              <Image
                source={{uri: item.urls.raw}}
                style={{height: 100, width: 100}}
              />
              <Text>{item.description}</Text>
              <Text>{item.likes}</Text>
            </>
          )}
        />
      )}
    </View>
  );
};

export default Unsplash;
