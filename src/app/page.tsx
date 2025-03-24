import {NewsArticleLG} from "@/entities";

export default function Home() {
  const currentTime = new Date();
  currentTime.setHours(14);
  currentTime.setMinutes(0);

  return (
    <div>
      <NewsArticleLG
          image={'https://placehold.co/1900x1200.png'}
          rubric={'Test'}
          rubric_link={''}
          time={currentTime}
          title={'Title'}
          desc={'jxdf tyc ghbk gjfc jhgkj hlgfdvs u9o;hguod riough diuobghd ugbgbvnegedh geagvboa weg'}
          tags={[
              {name: 'Tag1', link: ''},
              {name: 'Tag2', link: ''},
              {name: 'Tag3', link: ''},
              {name: 'Tag4', link: ''},
              {name: 'Tag5', link: ''},
          ]}
          link={''}
      />

    </div>

  );
}
