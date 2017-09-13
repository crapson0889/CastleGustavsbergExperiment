using System;
using System.Collections.Generic;

namespace CastleGustavsbergExperiment.Helpers
{
    // Taken from https://typescript.codeplex.com/discussions/406685
    public static class TypeScriptGenerator
    {
        public static void Generate(List<Type> types)
        {
            var rendered = "// This file is generated on runtime. Please avoid making any direct updates.\n";

            rendered += "import { Base } from './base'\n\n";

            foreach (var type in types)
            {
                var newClass = $"export class {type.Name} extends Base{{\n";

                var properties = type.GetProperties();

                newClass += newLine($"static readonly properties = [");

                foreach (var property in properties)
                {
                    var comma = properties[properties.Length - 1] != property ? "," : null;

                    newClass += newLine($"'{ConvertName(property.Name)}'{comma}");
                }

                newClass += newLine($"]");

                foreach (var property in properties)
                {
                    var formattedPropertyName = ConvertName(property.Name);
                    var propertyName = property.Name;
                    var propertyType = GetType(property.PropertyType);

                    newClass += "\n";

                    newClass += newLine($"// {propertyName}");

                    newClass += newLine($"public {formattedPropertyName}: {propertyType};");

                    //newClass += newLine($"private {formattedPropertyName}: {propertyType};");

                    //newClass += newLine($"public get {propertyName}(): {propertyType} {{ return this.{formattedPropertyName}; }}");

                    //newClass += newLine($"public set {propertyName}(value: {propertyType}) {{ this.{formattedPropertyName} = value; }}");
                }

                newClass += "}\n";

                rendered += newClass;
            }

            System.IO.File.WriteAllText(path: "./ClientApp/app/models/generated.ts", contents: rendered);
        }

        private static string GetType(Type type)
        {
            switch (type.ToString())
            {
                case "System.string":
                    return "string";
                case "System.Int32":
                    return "number";
                default:
                    return "any";
            }
        }

        private static string ConvertName(string name)
        {
            return Char.ToLowerInvariant(name[0]) + name.Substring(1);
        }

        private static string newLine(string line)
        {
            return "\t" + line + "\n";
        }
    }
}
