import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ToolkitsManager = () => (
  <div className="p-8">
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-bold text-foreground">Toolkits Manager</h1>
      <Button variant="teal">Add Toolkit</Button>
    </div>
    <div className="bg-card border border-border rounded-lg p-12 text-center">
      <p className="text-muted-foreground mb-4">Toolkit management will be fully functional once Lovable Cloud is enabled for file storage and database persistence.</p>
      <p className="text-sm text-muted-foreground">Currently, toolkits are displayed from static data on the public site.</p>
    </div>
  </div>
);

export default ToolkitsManager;
