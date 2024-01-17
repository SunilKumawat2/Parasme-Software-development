import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import CaseStudy from '../pages/caseStudy/CaseStudy'
import Portfolio from '../pages/portfolio/Portfolio'
import ContactUs from '../pages/contactus/ContactUs'
import BrandImages from '../pages/brandImg/BrandImages'
import Digitaldesign from '../pages/digitaldesign/Digitaldesign'
import FlyersDesign from '../pages/flyersDesign/FlyersDesign'
import Brochures from '../pages/brochures/Brochures'
import Infographics from '../pages/infographics/Infographics'
import Leaflets from '../pages/leaflets/Leaflets'
import Stationery from '../pages/stationery/Stationery'
import Onlinebanners from '../pages/onlinebanners/Onlinebanners'
import Posters from '../pages/posters/Posters'
import Presentationproposaldesign from '../pages/proposaldesign/Presentationproposaldesign'
import Printdesign from '../pages/printdesign/Printdesign'
import Menudesign from '../pages/menudesign/Menudesign'
import Signage from '../pages/signage/Signage'
import Businesscard from '../pages/businesscard/Businesscard'
import Onlinemarketing from '../pages/onlinemarketing/Onlinemarketing'
import BusinessInformation from '../pages/businessInformation/BusinessInformation';
import Creativeportfolio from '../pages/creativeportfolio/Creativeportfolio'
import ResponsiveWebDesign from '../pages/responsiveWebDesign/ResponsiveWebDesign'
import Websitehosting from '../pages/websitehosting/Websitehosting'
import WebsiteManagement from '../pages/websiteManagement/WebsiteManagement'
import MagentoWebsite from '../pages/magentoWebsite/MagentoWebsite'
import Ecommercewebhosting from '../pages/ecommercewebhosting/Ecommercewebhosting'
import Woocommercedevelopment from '../pages/woocommerce/Woocommercedevelopment'
import SSLCertificates from '../pages/ssLCertificates/SSLCertificates'
import Copywritingservices from '../pages/copywritingservices/Copywritingservices'
import MobileAppDesign from '../pages/mobileAppDesign/MobileAppDesign'
import HybridMobileApps from '../pages/hybridMobileApps/HybridMobileApps'
import Searchnetwork from '../pages/searchnetwork/Searchnetwork'
import DisplayNetwork from '../pages/displayNetwork/DisplayNetwork'
import VideoAdvertising from '../pages/videoAdvertising/VideoAdvertising'
import ShoppingAds from '../pages/shoppingAds/ShoppingAds'
import Remarketing from '../pages/remarketing/Remarketing'
import MobileMarketing from '../pages/mobileMarketing/MobileMarketing'
import ApplicationMarketing from '../pages/applicationMarketing/ApplicationMarketing'
import GmailAds from '../pages/gmailAds/GmailAds'
import DynamicReporting from '../pages/dynamicReporting/DynamicReporting'
import Bespokeseopackages from '../pages/bespokeseopackages/Bespokeseopackages'
import ConversionOptimization from '../pages/conversionOptimization/ConversionOptimization'
import ECommerceSEOProcess from '../pages/eCommerceSEOProcess/ECommerceSEOProcess'
import SEOSiteAnalysis from '../pages/sEOSiteAnalysis/SEOSiteAnalysis'
import GoogleTools from '../pages/googletools/GoogleTools'
import LocalSEOProcess from '../pages/LocalSEOProcess/LocalSEOProcess'
import SEOSoftware from '../pages/seoSoftware/SEOSoftware'
import Services from '../pages/services/Services'
import Blog from '../pages/blog/Blog'
import AdminLogin from '../../admin/adminLogin/AdminLogin'
import { ToastContainer } from 'react-toastify';
import AdminDashBoard from '../../admin/adminDashboard/AdminDashBoard'
import Protected from '../../admin/protected/Protected'
import AdminHome from '../../admin/adminDashboard/adminPages/AdminHome'
import AdminSlider from '../../admin/adminDashboard/adminPages/AdminSlider'
import AdminAwards from '../../admin/adminDashboard/adminPages/AdminAwards'
import AdminTechnology from '../../admin/adminDashboard/adminPages/AdminTechnology'
import AdminClientReview from '../../admin/adminDashboard/adminPages/AdminClientReview'
import AdminPortFolio from '../../admin/adminDashboard/adminPages/AdminPortFolio'
import AdminAllPortFolios from '../../admin/adminDashboard/adminPages/AdminAllPortFolios'
import AdminWebPortFolios from '../../admin/adminDashboard/adminPages/AdminWebPortFolios'
import AdminMobilePortFolios from '../../admin/adminDashboard/adminPages/AdminMobilePortFolios'
import AdminPartners from '../../admin/adminDashboard/adminPages/AdminPartners'
import AdminEnquiry from '../../admin/adminDashboard/adminPages/AdminEnquiry'
import AdminHelpingForm from '../../admin/adminDashboard/adminPages/AdminHelpingForm'
import AdminCaseStudy from '../../admin/adminDashboard/adminPages/AdminCaseStudy'
import AdminBrandingProjects from '../../admin/adminDashboard/adminPages/AdminBrandingProjects'
import AdminBlog from '../../admin/adminDashboard/adminPages/AdminBlog'
import AdminSEO from '../../admin/adminDashboard/adminPages/AdminSEO'
import AdminOurServicesGraphcs from '../../admin/adminDashboard/adminPages/AdminOurServicesGraphcs'
import AdminOurServicesDesign from '../../admin/adminDashboard/adminPages/AdminOurServicesDesign'
import AdminOurServicesEcommerce from '../../admin/adminDashboard/adminPages/AdminOurServicesEcommerce'
import AdminOurServicesMobile from '../../admin/adminDashboard/adminPages/AdminOurServicesMobile'
import AdminOurServicesPPC from '../../admin/adminDashboard/adminPages/AdminOurServicesPPC'
import AdminWebDevelopment from '../../admin/adminDashboard/adminPages/AdminWebDevelopment'
import AdminDevelopmentServicesDetails from '../../admin/adminDashboard/adminPages/AdminDevelopmentServicesDetails'
import AdminSocialMediaLink from '../../admin/adminDashboard/adminPages/AdminSocialMediaLink'
// import Admintest from '../../admin/adminDashboard/adminPages/Admintest';
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/CaseStudy' element={<CaseStudy/>}/>
        <Route path='/Portfolio' element={<Portfolio/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
        <Route path='/BrandImages/:_id' element={<BrandImages/>}/>
        <Route path='/Brochures' element={<Brochures/>}/>
        <Route path='/Businesscard' element={<Businesscard/>}/>
        <Route path='/Digitaldesign' element={<Digitaldesign/>}/>
        <Route path='/FlyersDesign' element={<FlyersDesign/>}/>
        <Route path='/Infographics' element={<Infographics/>}/>
        <Route path='/Leaflets' element={<Leaflets/>}/>
        <Route path='/Stationery' element={<Stationery/>}/>
        <Route path='/Onlinebanners' element={<Onlinebanners/>}/>
        <Route path='/Posters' element={<Posters/>}/>
        <Route path='/Presentationproposaldesign' element={<Presentationproposaldesign/>}/>
        <Route path='/Printdesign' element={<Printdesign/>}/>
        <Route path='/Menudesign' element={<Menudesign/>}/>
        <Route path='/Signage' element={<Signage/>}/>
        <Route path='/BusinessInformation/:_id' element={<BusinessInformation/>}/>
        <Route path='/Creativeportfolio' element={<Creativeportfolio/>}/>
        <Route path='/ResponsiveWebDesign' element={<ResponsiveWebDesign/>}/>
        <Route path='/Websitehosting' element={<Websitehosting/>}/>
        <Route path='/WebsiteManagement' element={<WebsiteManagement/>}/>
        <Route path='/MagentoWebsiteDevelopment/:_id' element={<MagentoWebsite/>}/>
        <Route path='/Ecommercewebhosting' element={<Ecommercewebhosting/>}/>
        <Route path='/Woocommercedevelopment' element={<Woocommercedevelopment/>}/>
        <Route path='/SSLCertificates' element={<SSLCertificates/>}/>
        <Route path='/Copywritingservices' element={<Copywritingservices/>}/>
        <Route path='/MobileAppDesign/:_id' element={<MobileAppDesign/>}/>
        <Route path='/HybridMobileApps' element={<HybridMobileApps/>}/>
        <Route path='/Searchnetwork/:_id' element={<Searchnetwork/>}/>
        <Route path='/DisplayNetwork' element={<DisplayNetwork/>}/>
        <Route path='/VideoAdvertising' element={<VideoAdvertising/>}/>
        <Route path='/ShoppingAds' element={<ShoppingAds/>}/>
        <Route path='/Remarketing' element={<Remarketing/>}/>
        <Route path='/MobileMarketing' element={<MobileMarketing/>}/>
        <Route path='/ApplicationMarketing' element={<ApplicationMarketing/>}/>
        <Route path='/GmailAds' element={<GmailAds/>}/>
        <Route path='/DynamicReporting' element={<DynamicReporting/>}/>
        <Route path='/Onlinemarketing/:_id' element={<Onlinemarketing/>}/>
        <Route path='/Bespokeseopackages' element={<Bespokeseopackages/>}/>
        <Route path='/ConversionOptimization' element={<ConversionOptimization/>}/>
        <Route path='/ECommerceSEOProcess' element={<ECommerceSEOProcess/>}/>
        <Route path='/SEOSiteAnalysis' element={<SEOSiteAnalysis/>}/>
        <Route path='/GoogleTools' element={<GoogleTools/>}/>
        <Route path='/LocalSEOProcess' element={<LocalSEOProcess/>}/>
        <Route path='/SEOSoftware' element={<SEOSoftware/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/AdminLogin' element={<AdminLogin/>}/>
        {/* <Route path='/AdminSideNav' element={<AdminSideNav/>}>
        </Route> */}
        <Route path='/AdminDashBoard' element={<Protected Component={AdminDashBoard} />}/>
        <Route path='/AdminDashBoard/' element={<Protected Component={AdminHome} />}/>
        <Route path='/AdminDashBoard/AdminSlider' element={<Protected Component={AdminSlider} />}/>
        <Route path='/AdminDashBoard/AdminAwards' element={<Protected Component={AdminAwards} />}/>
        <Route path='/AdminDashBoard/AdminTechnology' element={<Protected Component={AdminTechnology} />}/>
        <Route path='/AdminDashBoard/AdminClientReview' element={<Protected Component={AdminClientReview} />}/>
        <Route path='/AdminDashBoard/AdminPortFolio' element={<Protected Component={AdminPortFolio} />}/>
        <Route path='/AdminDashBoard/AdminAllPortFolios' element={<Protected Component={AdminAllPortFolios} />}/>
        <Route path='/AdminDashBoard/AdminWebPortFolios' element={<Protected Component={AdminWebPortFolios} />}/>
        <Route path='/AdminDashBoard/AdminMobilePortFolios' element={<Protected Component={AdminMobilePortFolios} />}/>
        <Route path='/AdminDashBoard/AdminPartners' element={<Protected Component={AdminPartners} />}/>
        <Route path='/AdminDashBoard/AdminEnquiry' element={<Protected Component={AdminEnquiry} />}/>
        <Route path='/AdminDashBoard/AdminHelpingForm' element={<Protected Component={AdminHelpingForm} />}/>
        <Route path='/AdminDashBoard/AdminCaseStudy' element={<Protected Component={AdminCaseStudy} />}/>
        <Route path='/AdminDashBoard/AdminBrandingProjects' element={<Protected Component={AdminBrandingProjects} />}/>
        <Route path='/AdminDashBoard/AdminBlog' element={<Protected Component={AdminBlog} />}/>
        <Route path='/AdminDashBoard/AdminSEO' element={<Protected Component={AdminSEO} />}/>
        <Route path='/AdminDashBoard/AdminOurServicesGraphcs' element={<Protected Component={AdminOurServicesGraphcs} />}/>
        <Route path='/AdminDashBoard/AdminOurServicesDesign' element={<Protected Component={AdminOurServicesDesign} />}/>
        <Route path='/AdminDashBoard/AdminOurServicesEcommerce' element={<Protected Component={AdminOurServicesEcommerce} />}/>
        <Route path='/AdminDashBoard/AdminOurServicesMobile' element={<Protected Component={AdminOurServicesMobile} />}/>
        <Route path='/AdminDashBoard/AdminOurServicesPPC' element={<Protected Component={AdminOurServicesPPC} />}/>
        <Route path='/AdminDashBoard/AdminWebDevelopment' element={<Protected Component={AdminWebDevelopment} />}/>
        <Route path='/AdminDashBoard/AdminDevelopmentServicesDetails' element={<Protected Component={AdminDevelopmentServicesDetails} />}/>
        <Route path='/AdminDashBoard/AdminSocialMediaLink' element={<Protected Component={AdminSocialMediaLink} />}/>
        {/* <Route path='/AdminDashBoard/Admintest' element={<Protected Component={Admintest} />}/> */}


      </Routes>
        <ToastContainer />
    </div>
  )
}

export default AllRoutes
