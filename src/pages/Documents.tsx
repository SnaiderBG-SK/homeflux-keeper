
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui-components/Card';
import { Badge } from '@/components/ui-components/Badge';
import { Button } from '@/components/ui-components/Button';
import { Plus, Search, Filter, FileText, FilePdf, FileImage, FileBox, Download, FileUp, ArrowDownUp } from 'lucide-react';

const Documents: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // These would normally come from an API or state
  const documents = [
    {
      id: '1',
      name: "Home Purchase Agreement.pdf",
      type: "PDF",
      category: "Legal",
      related: "Main Property",
      uploadDate: "2019-06-10",
      size: "3.5 MB",
      icon: FilePdf,
    },
    {
      id: '2',
      name: "Refrigerator Manual.pdf",
      type: "PDF",
      category: "Manual",
      related: "Refrigerator",
      uploadDate: "2020-03-15",
      size: "2.1 MB",
      icon: FilePdf,
    },
    {
      id: '3',
      name: "TV Warranty.pdf",
      type: "PDF",
      category: "Warranty",
      related: "Samsung Smart TV",
      uploadDate: "2021-11-25",
      size: "1.2 MB",
      icon: FilePdf,
    },
    {
      id: '4',
      name: "Vehicle Title.pdf",
      type: "PDF",
      category: "Legal",
      related: "Toyota Camry",
      uploadDate: "2020-09-05",
      size: "1.8 MB",
      icon: FilePdf,
    },
    {
      id: '5',
      name: "Home Inspection Report.pdf",
      type: "PDF",
      category: "Report",
      related: "Main Property",
      uploadDate: "2019-06-01",
      size: "5.3 MB",
      icon: FilePdf,
    },
    {
      id: '6',
      name: "Roof Repair Receipt.jpg",
      type: "Image",
      category: "Receipt",
      related: "Main Property",
      uploadDate: "2022-03-15",
      size: "2.8 MB",
      icon: FileImage,
    },
    {
      id: '7',
      name: "HVAC Service Contract.pdf",
      type: "PDF",
      category: "Contract",
      related: "Main Property",
      uploadDate: "2022-01-10",
      size: "1.5 MB",
      icon: FilePdf,
    },
    {
      id: '8',
      name: "Property Insurance Policy.pdf",
      type: "PDF",
      category: "Insurance",
      related: "Main Property",
      uploadDate: "2022-01-02",
      size: "3.2 MB",
      icon: FilePdf,
    },
    {
      id: '9',
      name: "Lawn Service Invoice.pdf",
      type: "PDF",
      category: "Invoice",
      related: "Main Property",
      uploadDate: "2022-04-10",
      size: "0.9 MB",
      icon: FilePdf,
    },
    {
      id: '10',
      name: "Kitchen Remodel Plans.pdf",
      type: "PDF",
      category: "Plans",
      related: "Main Property",
      uploadDate: "2021-09-15",
      size: "4.7 MB",
      icon: FilePdf,
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(date);
  };

  const getDocumentTypeIcon = (icon: React.ElementType) => {
    const IconComponent = icon;
    return <IconComponent className="h-4 w-4 text-primary" />;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onMenuClick={() => setSidebarOpen(true)} />
      
      <div className="flex-1 flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <div className="flex-1 ml-0 md:ml-64 pt-6 px-4 pb-12 overflow-y-auto transition-all duration-300">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <div>
                <Badge variant="outline" size="sm" className="mb-2">File Management</Badge>
                <h1 className="text-2xl font-bold tracking-tight text-foreground">Documents & Files</h1>
                <p className="text-muted-foreground mt-1">
                  Store and organize important documents related to your home.
                </p>
              </div>
              <div className="mt-4 sm:mt-0 flex items-center gap-2">
                <Button
                  variant="outline"
                  icon={<FileBox className="h-4 w-4" />}
                  iconPosition="left"
                >
                  New Folder
                </Button>
                <Button
                  icon={<FileUp className="h-4 w-4" />}
                  iconPosition="left"
                >
                  Upload Files
                </Button>
              </div>
            </div>
            
            <Card className="mb-6 animate-slide-up">
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input 
                      type="text" 
                      placeholder="Search documents..." 
                      className="pl-9 py-2 pr-4 h-10 w-full rounded-lg text-sm bg-background border border-input focus:outline-none focus:ring-1 focus:ring-primary" 
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      icon={<Filter className="h-4 w-4" />}
                      iconPosition="left"
                    >
                      Filter
                    </Button>
                    <Button
                      variant="outline"
                      icon={<ArrowDownUp className="h-4 w-4" />}
                      iconPosition="left"
                    >
                      Sort
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="space-y-4 animate-slide-up" style={{ animationDelay: `50ms` }}>
              {documents.map((document) => (
                <Card key={document.id} variant="bordered" hoverable className="cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="bg-primary/10 rounded-full p-2 mr-3">
                          {getDocumentTypeIcon(document.icon)}
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">{document.name}</h4>
                          <div className="flex items-center mt-1">
                            <Badge variant="secondary" size="sm" className="mr-2">{document.category}</Badge>
                            <span className="text-xs text-muted-foreground">Related to: {document.related}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right flex items-center">
                        <div className="mr-4 text-right">
                          <div className="text-xs text-muted-foreground">Uploaded</div>
                          <div className="text-xs font-medium">{formatDate(document.uploadDate)}</div>
                          <div className="text-xs text-muted-foreground mt-1">{document.size}</div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          aria-label="Download"
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
