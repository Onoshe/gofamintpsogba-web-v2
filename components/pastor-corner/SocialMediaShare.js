import {
  FacebookShareButton,
  LinkedinShareButton,
  XShareButton,
  PinterestShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  EmailShareButton,
  ViberShareButton,

  FacebookIcon,
  XIcon,
  LinkedinIcon,
  PinterestIcon,
  TelegramIcon,
  WhatsappIcon,
  ViberIcon,
} from "react-share";



export const SocialMediaShare = ({ topic, id }) => {
  const urlDomain = "http://localhost:3000";
  const shareUrl = `${urlDomain}/pastor-corner/${id}`; //`https://${urlDomain}${pathNameRaw}`;
  const title = topic;
  const hashtag = "#GofamintPsOgbaPastorCorner";
  const hashtagArr = ["GofamintPsOgbaPastorCorner"];


  return (
    <div className="flex flex-row flex-wrap gap-3">
      <FacebookShareButton
        url={shareUrl}
        quote={title}
        hashtag={hashtag}
        aria-label="Share this page on Facebook"
        className="hover:opacity-80"
      >
        <FacebookIcon size={40} round />
      </FacebookShareButton>

      <XShareButton
        url={shareUrl}
        title={title}
        htmlTitle={title}
        hashtags={hashtagArr}
        aria-label="Share on X"
        className="hover:opacity-80"
      >
        <XIcon size={40} round />
      </XShareButton>

      <TelegramShareButton
        url={shareUrl}
        title={title}
        aria-label="Share on Telegram"
        className="hover:opacity-80"
      >
        <TelegramIcon size={40} round />
      </TelegramShareButton>

      <WhatsappShareButton
        url={shareUrl}
        title={title}
        separator=":: "
        aria-label="Share on WhatsApp"
        className="hover:opacity-80"
      >
        <WhatsappIcon size={40} round />
      </WhatsappShareButton>

      <LinkedinShareButton
        url={shareUrl}
        className="hover:opacity-80"
      >
        <LinkedinIcon size={40} round />
      </LinkedinShareButton>

      <PinterestShareButton
        url={shareUrl}
        //media={`${String(window.location)}/${sharePhoto}`}
        className="hover:opacity-80"
      >
        <PinterestIcon size={40} round />
      </PinterestShareButton>

      <ViberShareButton
        url={shareUrl}
        title={title}
        className="hover:opacity-80"
      >
        <ViberIcon size={40} round />
      </ViberShareButton>

    </div>
  );
}

export default SocialMediaShare;
