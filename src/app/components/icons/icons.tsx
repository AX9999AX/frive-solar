import { SVGProps } from "react";

export function SunIcon(svgProps: SVGProps<SVGSVGElement>) {
  return (
    <div className="flex justify-center items-center h-11 w-11 bg-[#F5F8FF]">
      <svg
        width="16"
        height="18"
        viewBox="0 0 16 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...svgProps}
      >
        <path
          d="M8 1V2M8 16V17M1.07178 5L1.9378 5.5M14.0622 12.5L14.9282 13M14.9282 4.99999L14.0622 5.49999M1.93781 12.5L1.07178 13M12 9C12 6.79086 10.2091 5 8 5C5.79084 5 3.99998 6.79086 3.99998 9C3.99998 11.2091 5.79084 13 8 13C10.2091 13 12 11.2091 12 9Z"
          stroke="#252432"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}

export function StarIcon(svgProps: SVGProps<SVGSVGElement>) {
  return (
    <div className="flex justify-center items-center h-11 w-11 bg-[#F5F8FF]">
      <svg
        width="20"
        height="18"
        viewBox="0 0 20 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...svgProps}
      >
        <path
          d="M8.2442 1.86956C9.0022 0.479678 10.9979 0.479678 11.7559 1.86956L12.9723 4.09993C13.2599 4.62738 13.7694 4.99758 14.36 5.10817L16.8571 5.57579C18.4132 5.86719 19.0299 7.76527 17.9422 8.91567L16.1969 10.7617C15.7842 11.1983 15.5895 11.7973 15.6668 12.3931L15.9938 14.9125C16.1975 16.4824 14.5829 17.6555 13.1527 16.9766L10.8577 15.8871C10.3149 15.6295 9.6851 15.6295 9.1424 15.8871L6.84732 16.9766C5.41713 17.6555 3.80257 16.4824 4.00629 14.9125L4.3332 12.3931C4.41051 11.7973 4.21588 11.1983 3.80313 10.7617L2.05781 8.91567C0.970188 7.76527 1.58689 5.86719 3.14299 5.57579L5.64007 5.10817C6.2306 4.99758 6.74014 4.62738 7.02779 4.09993L8.2442 1.86956Z"
          stroke="#252432"
          stroke-width="1.5"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}

export function LogoIcon(svgProps: SVGProps<SVGSVGElement>) {
  return (
    <div className="flex justify-center items-center h-11 w-11 bg-[#F5F8FF]">
      <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...svgProps}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.2552 0C4.59139 0 0 4.59139 0 10.2552V27.0363C0 32.7001 4.59139 37.2915 10.2552 37.2915H27.0363C32.7001 37.2915 37.2915 32.7001 37.2915 27.0363V10.2552C37.2915 4.59139 32.7001 0 27.0363 0H10.2552ZM17.875 8.875V10.375C17.875 10.6734 17.9935 10.9595 18.2045 11.1705C18.4155 11.3815 18.7016 11.5 19 11.5C19.2984 11.5 19.5845 11.3815 19.7955 11.1705C20.0065 10.9595 20.125 10.6734 20.125 10.375V8.875C20.125 8.57663 20.0065 8.29048 19.7955 8.0795C19.5845 7.86853 19.2984 7.75 19 7.75C18.7016 7.75 18.4155 7.86853 18.2045 8.0795C17.9935 8.29048 17.875 8.57663 17.875 8.875ZM24.3006 22.5418C25.0011 21.4934 25.375 20.2609 25.375 19C25.3733 17.3098 24.7011 15.6893 23.5059 14.4941C22.3107 13.2989 20.6902 12.6267 19 12.625C17.7391 12.625 16.5066 12.9989 15.4582 13.6994C14.4099 14.3999 13.5928 15.3955 13.1103 16.5604C12.6278 17.7253 12.5015 19.0071 12.7475 20.2437C12.9935 21.4803 13.6006 22.6162 14.4922 23.5078C15.3838 24.3994 16.5197 25.0065 17.7563 25.2525C18.9929 25.4985 20.2747 25.3722 21.4396 24.8897C22.6045 24.4072 23.6001 23.5901 24.3006 22.5418ZM22.4298 16.7083C22.8831 17.3866 23.125 18.1842 23.125 19C23.1238 20.0936 22.6888 21.1421 21.9154 21.9154C21.1421 22.6888 20.0936 23.1238 19 23.125C18.1842 23.125 17.3866 22.8831 16.7083 22.4298C16.0299 21.9766 15.5012 21.3323 15.189 20.5786C14.8768 19.8248 14.7951 18.9954 14.9543 18.1953C15.1134 17.3951 15.5063 16.6601 16.0832 16.0832C16.6601 15.5063 17.3951 15.1134 18.1953 14.9543C18.9954 14.7951 19.8248 14.8768 20.5786 15.189C21.3323 15.5012 21.9766 16.0299 22.4298 16.7083ZM12.1947 13.6652C12.0579 13.6086 11.9337 13.5256 11.8291 13.4209L10.7041 12.2959C10.4927 12.0846 10.374 11.7979 10.374 11.4991C10.374 11.2002 10.4927 10.9135 10.7041 10.7022C10.9154 10.4908 11.2021 10.3721 11.5009 10.3721C11.7998 10.3721 12.0865 10.4908 12.2978 10.7022L13.4228 11.8272C13.5275 11.9318 13.6105 12.0561 13.6671 12.1928C13.7237 12.3295 13.7529 12.4761 13.7529 12.6241C13.7529 12.7721 13.7237 12.9186 13.6671 13.0553C13.6105 13.1921 13.5275 13.3163 13.4228 13.4209C13.3182 13.5256 13.1939 13.6086 13.0572 13.6652C12.9205 13.7219 12.7739 13.751 12.6259 13.751C12.4779 13.751 12.3314 13.7219 12.1947 13.6652ZM10.7041 25.7022L11.8291 24.5772C12.0404 24.3658 12.3271 24.2471 12.6259 24.2471C12.9248 24.2471 13.2115 24.3658 13.4228 24.5772C13.6342 24.7885 13.7529 25.0752 13.7529 25.3741C13.7529 25.6729 13.6342 25.9596 13.4228 26.1709L12.2978 27.2959C12.1932 27.4006 12.0689 27.4836 11.9322 27.5402C11.7955 27.5969 11.6489 27.626 11.5009 27.626C11.2021 27.626 10.9154 27.5073 10.7041 27.2959C10.5994 27.1913 10.5164 27.0671 10.4598 26.9303C10.4031 26.7936 10.374 26.6471 10.374 26.4991C10.374 26.3511 10.4031 26.2045 10.4598 26.0678C10.5164 25.9311 10.5994 25.8068 10.7041 25.7022ZM25.8057 13.6647C25.6691 13.7211 25.5228 13.7501 25.375 13.75C25.1518 13.7509 24.9334 13.6854 24.7475 13.5619C24.5617 13.4383 24.4168 13.2623 24.3312 13.0562C24.2457 12.85 24.2234 12.6231 24.2672 12.4042C24.311 12.1854 24.4189 11.9845 24.5772 11.8272L25.7022 10.7022C25.8068 10.5975 25.9311 10.5145 26.0678 10.4579C26.2045 10.4013 26.3511 10.3721 26.4991 10.3721C26.6471 10.3721 26.7936 10.4013 26.9303 10.4579C27.0671 10.5145 27.1913 10.5975 27.2959 10.7022C27.4006 10.8068 27.4836 10.9311 27.5402 11.0678C27.5969 11.2045 27.626 11.3511 27.626 11.4991C27.626 11.6471 27.5969 11.7936 27.5402 11.9303C27.4836 12.0671 27.4006 12.1913 27.2959 12.2959L26.1709 13.4209C26.0664 13.5254 25.9423 13.6082 25.8057 13.6647ZM25.3741 24.249C25.6729 24.249 25.9596 24.3677 26.1709 24.5791L27.2959 25.7041C27.5073 25.9154 27.626 26.2021 27.626 26.5009C27.626 26.7998 27.5073 27.0865 27.2959 27.2978C27.0846 27.5092 26.7979 27.6279 26.4991 27.6279C26.2002 27.6279 25.9135 27.5092 25.7022 27.2978L24.5772 26.1728C24.3658 25.9615 24.2471 25.6748 24.2471 25.3759C24.2471 25.0771 24.3658 24.7904 24.5772 24.5791C24.7885 24.3677 25.0752 24.249 25.3741 24.249ZM11.1705 18.2045C11.3815 18.4155 11.5 18.7016 11.5 19C11.5 19.2984 11.3815 19.5845 11.1705 19.7955C10.9595 20.0065 10.6734 20.125 10.375 20.125H8.875C8.57663 20.125 8.29048 20.0065 8.0795 19.7955C7.86853 19.5845 7.75 19.2984 7.75 19C7.75 18.7016 7.86853 18.4155 8.0795 18.2045C8.29048 17.9935 8.57663 17.875 8.875 17.875H10.375C10.6734 17.875 10.9595 17.9935 11.1705 18.2045ZM18.2045 26.8295C18.4155 26.6185 18.7016 26.5 19 26.5C19.2984 26.5 19.5845 26.6185 19.7955 26.8295C20.0065 27.0405 20.125 27.3266 20.125 27.625V29.125C20.125 29.4234 20.0065 29.7095 19.7955 29.9205C19.5845 30.1315 19.2984 30.25 19 30.25C18.7016 30.25 18.4155 30.1315 18.2045 29.9205C17.9935 29.7095 17.875 29.4234 17.875 29.125V27.625C17.875 27.3266 17.9935 27.0405 18.2045 26.8295ZM27.625 17.875H29.125C29.4234 17.875 29.7095 17.9935 29.9205 18.2045C30.1315 18.4155 30.25 18.7016 30.25 19C30.25 19.2984 30.1315 19.5845 29.9205 19.7955C29.7095 20.0065 29.4234 20.125 29.125 20.125H27.625C27.3266 20.125 27.0405 20.0065 26.8295 19.7955C26.6185 19.5845 26.5 19.2984 26.5 19C26.5 18.7016 26.6185 18.4155 26.8295 18.2045C27.0405 17.9935 27.3266 17.875 27.625 17.875Z"
          fill="black"
        />
      </svg>
    </div>
  );
}
